export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: string;
  images: string[];
  agentId: string;
  featured?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  bio: string;
  image: string;
  rating: number;
  reviews: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  authorId: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

// We will use standard luxury images (since we are mocking, we will just provide realistic paths that we will generate or use stock)
const propertyImages = [
  "/images/prop1.png",
  "/images/prop2.png",
  "/images/prop3.png",
  "/images/prop4.png",
  "/images/prop5.png"
];

export const agents: Agent[] = [
  {
    id: "a1",
    name: "Eleanor Vance",
    title: "Senior Partner, Manhattan",
    phone: "+1 (212) 555-0198",
    email: "eleanor@luxeestates.com",
    bio: "With over two decades of experience in ultra-luxury Manhattan real estate, Eleanor has brokered some of the most significant penthouse sales in the city's history. Her discretion and unparalleled network make her the choice for discerning buyers.",
    image: "/images/agent1.png",
    rating: 5.0,
    reviews: 142
  },
  {
    id: "a2",
    name: "Julian Cross",
    title: "Director of Estates, Malibu",
    phone: "+1 (310) 555-0245",
    email: "julian@luxeestates.com",
    bio: "Specializing in architectural beachfront properties, Julian brings a cinematic eye to real estate. His background in design allows him to articulate the unique value of structural masterpieces.",
    image: "/images/agent2.png",
    rating: 4.9,
    reviews: 89
  },
  {
    id: "a3",
    name: "Isabella Rossi",
    title: "European Operations, Florence",
    phone: "+39 055 555 0122",
    email: "isabella@luxeestates.com",
    bio: "Born into a family of architects in Florence, Isabella has an intimate knowledge of historic Italian estates. She guides international investors through the nuances of acquiring and restoring heritage properties.",
    image: "/images/agent3.png",
    rating: 5.0,
    reviews: 115
  }
];

export const properties: Property[] = [
  {
    id: "p1",
    title: "The Crown Penthouse at 432 Park",
    price: 85000000,
    location: "Manhattan, New York",
    type: "Penthouse",
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8255,
    description: "Suspended above the city, this full-floor penthouse offers 360-degree views of Central Park and the Manhattan skyline. Features include 12-foot ceilings, a private elevator landing, and museum-quality finishes throughout.",
    images: ["/images/prop1.png", "/images/prop2.png", "/images/prop3.png"],
    agentId: "a1",
    featured: true
  },
  {
    id: "p2",
    title: "Carbon Beach Glass House",
    price: 32500000,
    location: "Malibu, California",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6100,
    description: "An architectural triumph on 'Billionaire's Beach'. This modern masterpiece features walls of glass that slide away, blurring the line between the luxurious interior and the Pacific Ocean. Includes a private sandy beach deck.",
    images: ["/images/prop4.png", "/images/prop5.png", "/images/prop1.png"],
    agentId: "a2",
    featured: true
  },
  {
    id: "p3",
    title: "Villa dell'Arte",
    price: 18500000,
    location: "Florence, Italy",
    type: "Estate",
    bedrooms: 8,
    bathrooms: 9,
    sqft: 12500,
    description: "A meticulously restored 16th-century palazzo nestled in the Tuscan hills. Original frescoes, manicured formal gardens, a modern wellness center, and a subterranean wine tasting vault make this a rare generational asset.",
    images: ["/images/prop2.png", "/images/prop3.png", "/images/prop4.png"],
    agentId: "a3",
    featured: true
  },
  {
    id: "p4",
    title: "Tribeca Industrial Loft",
    price: 12500000,
    location: "Tribeca, New York",
    type: "Loft",
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 5200,
    description: "Authentic pre-war details meet contemporary luxury in this massive corner loft. Exposed brick, cast-iron columns, and oversized arched windows pair beautifully with the custom Italian kitchen and smart home technology.",
    images: ["/images/prop5.png", "/images/prop1.png"],
    agentId: "a1"
  },
  {
    id: "p5",
    title: "Bel Air Promontory Estate",
    price: 65000000,
    location: "Bel Air, California",
    type: "Estate",
    bedrooms: 9,
    bathrooms: 14,
    sqft: 24000,
    description: "Situated on a rare two-acre promontory, this newly constructed compound offers unobstructed views from downtown LA to the ocean. Amenities include an indoor lap pool, a 20-seat theater, and a 10-car gallery.",
    images: ["/images/prop3.png", "/images/prop4.png"],
    agentId: "a2"
  },
  {
    id: "p6",
    title: "Lake Como Vineyard Villa",
    price: 22000000,
    location: "Lake Como, Italy",
    type: "Villa",
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8800,
    description: "Classic lakefront elegance. This private villa features direct water access, a private boat dock, lush terraced gardens, and completely modernized interiors that respect the historic architecture.",
    images: ["/images/prop1.png", "/images/prop2.png"],
    agentId: "a3"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "future-of-luxury-amenities",
    title: "The Future of Luxury Amenities: Beyond the Infinity Pool",
    excerpt: "What ultra-high-net-worth buyers are demanding in their next primary residence.",
    content: "Long-form content goes here. The definition of luxury is evolving from material excess to wellness, privacy, and seamless technology...",
    category: "Market Trends",
    date: "2023-10-15",
    image: "/images/prop1.png",
    authorId: "a1"
  },
  {
    id: "b2",
    slug: "investing-in-historic-european-estates",
    title: "Investing in Heritage: The European Estate Market",
    excerpt: "Navigating the complexities and rewards of acquiring historic European properties.",
    content: "Content about European real estate. Tax incentives, restoration challenges, and the timeless appeal of owning a piece of history...",
    category: "Investment",
    date: "2023-11-02",
    image: "/images/prop3.png",
    authorId: "a3"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Arthur Pendelton",
    role: "Tech Executive",
    content: "Luxe Estates handled our complex cross-border transaction with absolute precision. Their discretion and market knowledge are unparalleled.",
    rating: 5
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "International Investor",
    content: "They don't just show you properties; they curate a collection of architectural masterpieces. Found my dream home in Malibu thanks to Julian.",
    rating: 5
  },
  {
    id: "t3",
    name: "Marcus Thorne",
    role: "Philanthropist",
    content: "The level of service extends far beyond the sale. Their advisory team helped us navigate local zoning laws for our estate renovation seamlessly.",
    rating: 5
  }
];
