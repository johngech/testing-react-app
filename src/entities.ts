export interface User {
  id: number;
  name: string;
  isAdmin?: boolean;
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
}
