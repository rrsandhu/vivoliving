// src/lib/data.ts
export const siteConfig = {
  name: "Vivo",
  tagline: "Elevated Living. Urban Energy.",
  address: "13255 104 Ave, Surrey, BC",
  city: "Surrey, BC",
  postalCode: "V3T 0H6",
  phone: "(604) 555-0182",
  email: "leasing@vivoliving.ca",
  leasingHours: [
    { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "10:00 AM – 5:00 PM" },
    { days: "Sunday", hours: "By Appointment" },
  ],
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
  meta: {
    title: "Vivo | Rental Homes in Surrey City Centre",
    description:
      "Discover modern 1, 2 & 3 bedroom rental homes at Vivo — purpose-built living in the heart of Surrey City Centre. Book a tour today.",
    ogImage: "/images/og-image.jpg",
  },
};

export const floorPlans = [
  {
    id: "a1",
    name: "The Arbour",
    type: "1 Bed",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 548,
    startingRent: 2095,
    available: true,
    availableDate: "Now",
    floor: 3,
    image: "/images/floorplans/1bed-a.jpg",
    features: ["Balcony", "In-suite Laundry", "Dishwasher"],
  },
  {
    id: "a2",
    name: "The Birch",
    type: "1 Bed",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 592,
    startingRent: 2195,
    available: true,
    availableDate: "Now",
    floor: 5,
    image: "/images/floorplans/1bed-b.jpg",
    features: ["Balcony", "In-suite Laundry", "City Views"],
  },
  {
    id: "a3",
    name: "The Cedar",
    type: "1 Bed",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 631,
    startingRent: 2295,
    available: false,
    availableDate: "May 1",
    floor: 8,
    image: "/images/floorplans/1bed-c.jpg",
    features: ["Juliet Balcony", "In-suite Laundry", "Corner Unit"],
  },
  {
    id: "b1",
    name: "The Douglas",
    type: "2 Bed",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 842,
    startingRent: 2895,
    available: true,
    availableDate: "Now",
    floor: 4,
    image: "/images/floorplans/2bed-a.jpg",
    features: ["Balcony", "In-suite Laundry", "2 Full Baths"],
  },
  {
    id: "b2",
    name: "The Elms",
    type: "2 Bed",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 901,
    startingRent: 3050,
    available: true,
    availableDate: "Now",
    floor: 7,
    image: "/images/floorplans/2bed-b.jpg",
    features: ["Large Balcony", "In-suite Laundry", "City Views"],
  },
  {
    id: "b3",
    name: "The Fraser",
    type: "2 Bed",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 978,
    startingRent: 3250,
    available: false,
    availableDate: "June 1",
    floor: 10,
    image: "/images/floorplans/2bed-c.jpg",
    features: ["Wraparound Balcony", "In-suite Laundry", "Top Floor"],
  },
  {
    id: "c1",
    name: "The Grove",
    type: "3 Bed",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1178,
    startingRent: 3795,
    available: true,
    availableDate: "Now",
    floor: 6,
    image: "/images/floorplans/3bed-a.jpg",
    features: ["Balcony", "In-suite Laundry", "Den"],
  },
  {
    id: "c2",
    name: "The Haven",
    type: "3 Bed",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1254,
    startingRent: 4095,
    available: false,
    availableDate: "April 15",
    floor: 9,
    image: "/images/floorplans/3bed-b.jpg",
    features: ["Large Balcony", "In-suite Laundry", "2 Full Baths", "Corner Unit"],
  },
];

export const amenities = {
  building: [
    {
      id: "gym",
      icon: "dumbbell",
      title: "Fitness Centre",
      description: "A fully equipped fitness studio with cardio machines, free weights, and dedicated stretching space.",
    },
    {
      id: "lounge",
      icon: "sofa",
      title: "Resident Lounge",
      description: "A beautifully appointed common room for relaxing, working from home, or entertaining guests.",
    },
    {
      id: "rooftop",
      icon: "sun",
      title: "Rooftop Terrace",
      description: "Take in panoramic views of Surrey and the North Shore mountains from our landscaped rooftop terrace.",
    },
    {
      id: "concierge",
      icon: "shield",
      title: "Secure Entry",
      description: "Key-fob access and intercom throughout the building for your safety and peace of mind.",
    },
    {
      id: "bike",
      icon: "bicycle",
      title: "Bike Storage & Repair",
      description: "Dedicated secure bike storage with a repair station — perfect for the urban commuter.",
    },
    {
      id: "parking",
      icon: "car",
      title: "Underground Parking",
      description: "Available underground parking stalls with EV charging rough-in for select units.",
    },
    {
      id: "pets",
      icon: "heart",
      title: "Pet-Friendly",
      description: "Dogs and cats welcome. Enjoy convenient access to nearby parks and green spaces.",
    },
    {
      id: "parcel",
      icon: "package",
      title: "Smart Parcel Lockers",
      description: "Automated parcel storage so you never miss a delivery, available 24/7.",
    },
  ],
  inSuite: [
    {
      id: "laundry",
      icon: "washing-machine",
      title: "In-Suite Laundry",
      description: "Full-size washer and dryer in every home.",
    },
    {
      id: "appliances",
      icon: "chef-hat",
      title: "Premium Appliances",
      description: "Stainless steel kitchen appliances including fridge, stove, dishwasher, and microwave.",
    },
    {
      id: "finishes",
      icon: "sparkles",
      title: "Quality Finishes",
      description: "Wide-plank flooring, stone countertops, and designer fixtures throughout.",
    },
    {
      id: "balcony",
      icon: "wind",
      title: "Private Balconies",
      description: "Most suites feature private balconies with sweeping views of the city and mountains.",
    },
    {
      id: "windows",
      icon: "sun",
      title: "Floor-to-Ceiling Windows",
      description: "Expansive windows flood every room with natural light.",
    },
    {
      id: "ac",
      icon: "thermometer",
      title: "Air Conditioning",
      description: "In-suite air conditioning keeps you comfortable year-round.",
    },
  ],
};

export const faqs = [
  {
    question: "What unit types are available at Vivo?",
    answer:
      "Vivo offers 1-bedroom, 2-bedroom, and 3-bedroom rental homes across 115 suites. Each suite features modern finishes, in-suite laundry, and most include private balconies.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Yes, Vivo is a pet-friendly community. Dogs and cats are welcome with reasonable size and breed restrictions. Please contact our leasing team for details.",
  },
  {
    question: "Is parking available?",
    answer:
      "Underground parking is available for an additional monthly fee. EV charging rough-in is available for select stalls. Contact leasing for current availability and pricing.",
  },
  {
    question: "When can I move in?",
    answer:
      "Some suites are available immediately. Others have upcoming availability. Visit our Floor Plans page for current availability or contact our leasing team directly.",
  },
  {
    question: "How do I book a tour?",
    answer:
      "You can book a tour online through our Contact page, call us at (604) 555-0182, or email leasing@vivoliving.ca. Our leasing team is available Monday–Friday 9AM–6PM, Saturday 10AM–5PM, and Sunday by appointment.",
  },
  {
    question: "What is included in the rent?",
    answer:
      "Rent includes use of all building amenities. Utilities (electricity, gas, water) are typically separate unless otherwise specified. Ask our leasing team about specific suite inclusions.",
  },
  {
    question: "Is Vivo close to public transit?",
    answer:
      "Vivo is located steps from the Central City SkyTrain Station, providing direct access to downtown Vancouver in under 45 minutes. Multiple bus routes also serve the area.",
  },
  {
    question: "What is the lease term?",
    answer:
      "Standard lease terms are 12 months. Shorter-term options may be available — please contact our leasing office to discuss your specific needs.",
  },
];

export const galleryItems = [
  { id: 1, category: "Exterior", src: "/images/gallery/exterior-1.jpg", alt: "Vivo building exterior" },
  { id: 2, category: "Exterior", src: "/images/gallery/exterior-2.jpg", alt: "Vivo entrance" },
  { id: 3, category: "Lobby", src: "/images/gallery/lobby-1.jpg", alt: "Vivo lobby" },
  { id: 4, category: "Lobby", src: "/images/gallery/lobby-2.jpg", alt: "Resident lounge" },
  { id: 5, category: "Suites", src: "/images/gallery/suite-1.jpg", alt: "Living room" },
  { id: 6, category: "Suites", src: "/images/gallery/suite-2.jpg", alt: "Kitchen" },
  { id: 7, category: "Suites", src: "/images/gallery/suite-3.jpg", alt: "Master bedroom" },
  { id: 8, category: "Suites", src: "/images/gallery/suite-4.jpg", alt: "Bathroom" },
  { id: 9, category: "Amenities", src: "/images/gallery/amenity-1.jpg", alt: "Fitness centre" },
  { id: 10, category: "Amenities", src: "/images/gallery/amenity-2.jpg", alt: "Rooftop terrace" },
  { id: 11, category: "Neighbourhood", src: "/images/gallery/neighbourhood-1.jpg", alt: "Surrey City Centre" },
  { id: 12, category: "Neighbourhood", src: "/images/gallery/neighbourhood-2.jpg", alt: "Central City Station" },
];

export const neighbourhoodItems = [
  {
    category: "Transit",
    icon: "train",
    items: ["Central City SkyTrain (5 min walk)", "Multiple bus routes", "45 min to Downtown Vancouver", "Easy highway access"],
  },
  {
    category: "Shopping",
    icon: "shopping-bag",
    items: ["Central City Mall", "Central City Shopping Centre", "Walmart & Canadian Tire nearby", "Farmer's Market (seasonal)"],
  },
  {
    category: "Dining",
    icon: "utensils",
    items: ["Holland Park area restaurants", "Local cafés and bakeries", "International cuisine nearby", "Quick-service & fine dining"],
  },
  {
    category: "Parks",
    icon: "tree",
    items: ["Holland Park (5 min walk)", "Green Timbers Urban Forest", "Bear Creek Park", "Tynehead Regional Park"],
  },
  {
    category: "Schools",
    icon: "book-open",
    items: ["KPU Surrey Campus", "SFU Surrey", "Kwantlen Polytechnic University", "Local elementary & secondary schools"],
  },
  {
    category: "Essentials",
    icon: "shopping-cart",
    items: ["Safeway & Save-On-Foods nearby", "Surrey Memorial Hospital", "Multiple pharmacies", "Banks & financial services"],
  },
];
