export default interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
  category: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
