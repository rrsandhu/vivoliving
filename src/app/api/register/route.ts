import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, unitType, moveIn, notes } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    // Check for duplicate email
    const { data: existing } = await supabase
      .from("registrations")
      .select("id")
      .eq("email", email.toLowerCase())
      .maybeSingle();

    if (existing) {
      return NextResponse.json({ error: "This email is already registered." }, { status: 409 });
    }

    // Insert new registration
    const { data, error } = await supabase
      .from("registrations")
      .insert({
        name,
        email: email.toLowerCase(),
        phone: phone || null,
        unit_type: unitType || null,
        move_in: moveIn || null,
        notes: notes || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true, entry: data });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

// GET — returns all registrations, protected by ADMIN_KEY
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("registrations")
    .select("*")
    .order("registered_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Could not fetch registrations." }, { status: 500 });
  }

  return NextResponse.json(data);
}
