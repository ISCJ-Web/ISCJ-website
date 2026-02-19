export interface NavLink {
  label: string;
  href: string;
}

export interface PrayerTime {
  name: string;
  time: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
}
