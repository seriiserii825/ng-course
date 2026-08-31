export interface IRoom {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
  available: boolean;
  rating: number;
  favorite?: boolean;
}
