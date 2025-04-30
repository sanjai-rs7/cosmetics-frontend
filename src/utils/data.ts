// Type definitions
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  stock: number;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

// Sample products data
export const products: Product[] = [
  {
    id: "1",
    name: "Vintage Rose Facial Cream",
    description:
      "Our bestselling facial cream with extracts of Bulgarian rose to hydrate and revitalize your skin. This luxurious cream is inspired by beauty rituals from the early 1900s, updated with modern ingredients for optimal effectiveness.",
    price: 48.0,
    image:
      "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "skincare",
    tags: ["moisturizer", "hydrating", "rose"],
    featured: true,
    stock: 15,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Pearl Illuminating Powder",
    description:
      "A finely milled illuminating powder with real crushed pearl for a subtle, luminous glow. Perfect for adding a touch of radiance to your complexion, inspired by the glamour of the Art Deco era.",
    price: 36.0,
    image:
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "makeup",
    tags: ["powder", "illuminating", "pearl"],
    featured: true,
    stock: 10,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "3",
    name: "Lavender & Chamomile Bath Salts",
    description:
      "Luxurious bath salts infused with lavender and chamomile essential oils to relax the mind and soothe the body. Each jar contains enough for 5-7 indulgent baths.",
    price: 24.0,
    image:
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "bath",
    tags: ["bath", "relaxing", "lavender"],
    featured: false,
    stock: 25,
    rating: 4.9,
    reviews: 67,
  },
  {
    id: "4",
    name: "Amber Vanilla Parfum",
    description:
      "A timeless fragrance featuring warm amber, vanilla, and hints of sandalwood. Presented in an elegant vintage-inspired glass bottle with atomizer.",
    price: 85.0,
    image:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fragrances",
    tags: ["perfume", "amber", "vanilla"],
    featured: true,
    stock: 8,
    rating: 4.6,
    reviews: 42,
  },
  {
    id: "5",
    name: "Rouge Lip Tint",
    description:
      "A long-lasting lip tint inspired by the bold lip colors of the 1920s. This moisturizing formula gives a natural stain effect that lasts for hours.",
    price: 22.0,
    image:
      "https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "makeup",
    tags: ["lips", "tint", "red"],
    featured: false,
    stock: 20,
    rating: 4.5,
    reviews: 58,
  },
  {
    id: "6",
    name: "Cucumber & Mint Facial Toner",
    description:
      "A refreshing alcohol-free toner with cucumber extract and mint essential oil to refine pores and refresh the skin. The glass bottle is inspired by vintage apothecary designs.",
    price: 26.0,
    image:
      "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "skincare",
    tags: ["toner", "refreshing", "cucumber"],
    featured: false,
    stock: 18,
    rating: 4.4,
    reviews: 36,
  },
  {
    id: "7",
    name: "Honey & Almond Hand Cream",
    description:
      "A luxurious hand cream with honey and sweet almond oil to nourish and protect hands. The elegant tube design features vintage botanical illustrations.",
    price: 18.0,
    image:
      "https://images.pexels.com/photos/6621329/pexels-photo-6621329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "skincare",
    tags: ["hands", "moisturizing", "honey"],
    featured: false,
    stock: 30,
    rating: 4.7,
    reviews: 82,
  },
  {
    id: "8",
    name: "Rosemary Hair Oil",
    description:
      "A nourishing hair oil with rosemary, argan, and jojoba oils to strengthen and add shine to hair. Based on a traditional recipe used by women in the early 20th century.",
    price: 32.0,
    image:
      "https://images.pexels.com/photos/4210373/pexels-photo-4210373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "haircare",
    tags: ["hair", "oil", "rosemary"],
    featured: true,
    stock: 12,
    rating: 4.8,
    reviews: 49,
  },
  {
    id: "9",
    name: "Beautiful Belle Gift Set",
    description:
      "Our most popular gift set featuring 5 deluxe samples of our bestselling products, elegantly packaged in a vintage-inspired keepsake box.",
    price: 75.0,
    image:
      "https://images.pexels.com/photos/234176/pexels-photo-234176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "gifts",
    tags: ["gift", "set", "bestsellers"],
    featured: true,
    stock: 5,
    rating: 5.0,
    reviews: 28,
  },
  {
    id: "10",
    name: "Velvet Cream Blush",
    description:
      "A creamy blush with a velvet finish for a natural-looking flush of color. The vintage-inspired compact features an elegant design and includes a mirror.",
    price: 28.0,
    image:
      "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "makeup",
    tags: ["blush", "cream", "cheeks"],
    featured: false,
    stock: 15,
    rating: 4.6,
    reviews: 52,
  },
  {
    id: "11",
    name: "Jasmine & Green Tea Eau de Parfum",
    description:
      "A refreshing fragrance featuring jasmine flowers and green tea, presented in a beautifully etched glass bottle inspired by Art Nouveau designs.",
    price: 72.0,
    image:
      "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fragrances",
    tags: ["perfume", "jasmine", "green tea"],
    featured: false,
    stock: 10,
    rating: 4.7,
    reviews: 38,
  },
  {
    id: "12",
    name: "Rose Gold Mirror Compact",
    description:
      "A beautifully crafted rose gold compact mirror with intricate vintage-inspired engravings. A perfect accessory for your beauty routine or a thoughtful gift.",
    price: 26.0,
    image:
      "https://images.pexels.com/photos/3845579/pexels-photo-3845579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "accessories",
    tags: ["mirror", "compact", "rose gold"],
    featured: false,
    stock: 8,
    rating: 4.8,
    reviews: 19,
  },
];

// Sample categories data
export const categories: Category[] = [
  {
    id: "skincare",
    name: "Skincare",
    description:
      "Luxurious creams, serums, and oils inspired by vintage beauty rituals.",
    image:
      "https://images.pexels.com/photos/3094021/pexels-photo-3094021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "makeup",
    name: "Makeup",
    description:
      "Elegant cosmetics with vintage-inspired packaging and formulations.",
    image:
      "https://images.pexels.com/photos/259325/pexels-photo-259325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "fragrances",
    name: "Fragrances",
    description:
      "Timeless scents in beautifully crafted bottles inspired by bygone eras.",
    image:
      "https://images.pexels.com/photos/264526/pexels-photo-264526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "bath",
    name: "Bath & Body",
    description: "Indulgent bath products for a spa-like experience at home.",
    image:
      "https://laurajaneatelier.com/wp-content/uploads/2019/11/DSCF1012-1170x780.jpg",
  },
  {
    id: "haircare",
    name: "Haircare",
    description: "Traditional hair treatments with modern effectiveness.",
    image:
      "https://images.mykhel.com/webp/ph-big/2024/03/cricketing-maestro-the-one-amp;-only-king-new-hairstyle-goes-viral_171084045410.jpg",
  },
  {
    id: "gifts",
    name: "Gift Sets",
    description: "Beautifully packaged collections of our finest products.",
    image:
      "https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};
