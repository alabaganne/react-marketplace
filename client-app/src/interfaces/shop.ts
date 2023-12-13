export default interface Shop {
  id: number;
  name: string;
  description: string;
  phone: string;
  email: string;
  address?: string;
  verified: boolean;
}
