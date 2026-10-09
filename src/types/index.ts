export type ScreenId = 'home' | 'shop' | 'wishlist' | 'profile' | 'detail';

export interface Product {
  id: string;
  name: string;
  tagline?: string;
  category: 'Dresses' | 'Outerwear' | 'Accessories' | 'Footwear' | 'Tailoring';
  collection: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery?: string[];
  description: string;
  material: string;
  origin: string;
  availableSizes: string[];
  color: string;
  fabricType: string;
  isLimited?: boolean;
  editorialNote?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  size: string;
  quantity: number;
}

export interface FilterOptions {
  size: string;
  color: string;
  fabric: string;
  category: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc';
}
