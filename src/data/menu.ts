export type MenuItem = {
  id: string;
  name: string;
  category: "Starter" | "Main Course" | "Dessert" | "Drinks";
  description: string;
  price: number;
  badge?: string;
  image: string;
  dietary: string[];
};

export const featuredMenu: MenuItem[] = [
  {
    id: "short-rib",
    name: "Charred Beef Short Rib",
    category: "Main Course",
    description: "Slow-cooked beef short rib, smoked jus, roasted shallot.",
    price: 185000,
    badge: "Chef's Pick",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80",
    dietary: []
  },
  {
    id: "prawn-pasta",
    name: "Burnt Butter Prawn Pasta",
    category: "Main Course",
    description: "Tiger prawn, burnt butter, chili, garlic crumb.",
    price: 145000,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80",
    dietary: ["spicy"]
  },
  {
    id: "ember-carrots",
    name: "Coal-roasted Carrots",
    category: "Starter",
    description: "Smoked yogurt, coriander seed, toasted hazelnut.",
    price: 78000,
    badge: "Seasonal",
    image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1000&q=80",
    dietary: ["vegetarian"]
  },
  {
    id: "citrus-fish",
    name: "Citrus Charred Fish",
    category: "Main Course",
    description: "Line-caught fish, grilled lemon, fennel, olive herb oil.",
    price: 168000,
    badge: "Fresh Market",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80",
    dietary: []
  },
  {
    id: "smoked-chocolate",
    name: "Smoked Chocolate Tart",
    category: "Dessert",
    description: "Dark chocolate custard, burnt honey, sea salt cream.",
    price: 72000,
    badge: "For Two",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80",
    dietary: []
  },
  {
    id: "cinder-spritz",
    name: "Cinder Citrus Spritz",
    category: "Drinks",
    description: "Orange bitters, house citrus, soda, smoked rosemary.",
    price: 88000,
    badge: "House Pour",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1000&q=80",
    dietary: []
  }
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(price);
