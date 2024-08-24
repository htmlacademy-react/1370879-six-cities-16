export type HostType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferTemplateType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: LocationType;
  };
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type OfferCardType = OfferTemplateType & {
  previewImage: string;
}

export type OfferType = OfferTemplateType & {
  zoom: boolean;
  description: string;
  bedrooms: number;
  goods: string[];
  host: HostType;
  images: string[];
  maxAdults: number;
}
