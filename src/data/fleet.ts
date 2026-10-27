export type Car = {
  name: string;
  type: string;
  rate: string;
  tag: string;
  image: string;   // local path or unsplash ID
  isLocal?: boolean;
};

export const fleet: Car[] = [
  {
    name: 'VinFast MPV7',
    type: '7-seater MPV · Electric',
    rate: 'Get a quote',
    tag: 'Room for everyone',
    image: '/cars/vinfast-mpv7.webp',
    isLocal: true,
  },
  {
    name: 'VinFast Limo Green ER',
    type: 'Extended range · Premium',
    rate: 'Get a quote',
    tag: 'Go a little further',
    image: '/cars/VinFast-Limo-Green-ER.avif',
    isLocal: true,
  },
];