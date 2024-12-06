export interface PropertyDetails {
  id: string;
  title: string;
  description: string;
  type: string;
  size: string;
  price: string;
  location: string;
  proximity: string;
  amenities: { title: string; icon: string }[];
  yearbuilt: string;
  longitude: string;
  latitude: string;
  rating: string;
  image: { id: string; propertyId: string; url: string }[];
  thumbnails: string[];
}
