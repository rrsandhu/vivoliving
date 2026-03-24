import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "registrations.json");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, unitType, moveIn, notes } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    // Read existing registrations
    let registrations: object[] = [];
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      registrations = JSON.parse(raw);
    }

    // Check for duplicate email
    const duplicate = (registrations as { email: string }[]).find(
      (r) => r.email.toLowerCase() === email.toLowerCase()
    );
    if (duplicate) {
      return NextResponse.json({ error: "This email is already registered." }, { status: 409 });
    }

    const entry = {
      id: Date.now(),
      name,
      email,
      phone: phone || "",
      unitType: unitType || "",
      moveIn: moveIn || "",
      notes: notes || "",
      registeredAt: new Date().toISOString(),
    };

    registrations.push(entry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(registrations, null, 2));

    return NextResponse.json({ success: true, entry });
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

  try {
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json([]);
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ error: "Could not read registrations." }, { status: 500 });
  }
}
