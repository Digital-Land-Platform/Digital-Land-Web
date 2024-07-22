export interface PropertyDetails {
  id: string;
  title: string;
  description: string;
  type: string;
  size: string;
  price: number;
  location: string;
  proximity: string;
  neighborhood: string;
  energyrating: string;
  futureDevelopmentPlans: string;
  disclosure: string;
  legalStatus: string;
  zoningInformation: string;
  streetview: string;
  amenities: { title: string; icon: string }[];
  yearbuilt: string;
  longitude: string;
  latitude: string;
  rating: string;
  image: { id: string; propertyId: string; url: string }[];
  thumbnails: string[];
}
