export interface Resource {
  id: string;
  name: string;
  description: string;
  type: 'pdf' | 'video' | 'audio';
  category: string;
  accessLevel: 'free' | 'premium';
  url: string;
  price: number | null;
  createdAt: Date;
  updatedAt: Date;
}