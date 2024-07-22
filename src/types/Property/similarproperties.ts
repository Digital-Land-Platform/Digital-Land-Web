export interface SimilarProperty {
  id: string;
  title: string;
  description: string;
  type: string;
  size: string;
  price: number;
  location: string;
  image: { id: string; propertyId: string; url: string }[];
}
