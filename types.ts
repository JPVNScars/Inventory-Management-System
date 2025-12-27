export interface Part {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  image: string;
  location?: string;
  category?: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
  shift?: string;
}

export interface Transaction {
  id: string;
  partName: string;
  sku: string;
  type: 'in' | 'out';
  quantity: number;
  time: string;
  user: string;
}
