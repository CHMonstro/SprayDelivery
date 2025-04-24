export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  color?: string;
  brand?: string;
  category?: string;
  stock: number;
  rating: number;
}
