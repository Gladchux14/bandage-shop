export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category?: string;
    stock?: number;
    quantity: number;
  }
  