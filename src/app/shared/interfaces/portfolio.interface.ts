export interface Portfolio {
  id: string;
  image: string;
  name: string;
  slug: string;
}

export interface About {
  headline: string;
  subHeadline: string;
  content: string[];
  image: string;
  imageAlt: string;
}

export interface Room {
  headline: string;
  content: string[];
  image: string;
  imageAlt: string;
}

export interface Meta {
  description: string;
  keywords: string;
  title: string;
}

export interface PropertyDetail {
  slug: string;
  name: string;
  images: string[];
  about: About;
  extraInfo?: string;
  room?: Room;
  reservationLink: string;
  manager?: string;
  managerDescription?: string;
  meta: Meta;
}
