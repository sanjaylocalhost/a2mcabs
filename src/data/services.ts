export type Service = {
  id: string;
  index: string;       // "01 / TAKE THE WHEEL"
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  variant: 'self-drive' | 'chauffeur' | 'tours' | 'airport';
};

export const services: Service[] = [
  {
    id: 'local-rental',
    index: '01 / IN THE CITY',
    icon: '⌖',
    title: 'Local rental',
    description: 'Hourly or daily city drives, on your schedule.',
    linkText: 'Book local rental',
    href: '#booking',
    variant: 'self-drive',
  },
  {
    id: 'intercity',
    index: '02 / BETWEEN CITIES',
    icon: '⇄',
    title: 'Intercity',
    description: 'Comfortable long-distance rides with a trusted driver.',
    linkText: 'Plan an intercity trip',
    href: '#booking',
    variant: 'chauffeur',
  },
  {
    id: 'self-drive',
    index: '03 / TAKE THE WHEEL',
    icon: '⌁',
    title: 'Self-drive',
    description: 'Your playlist. Your pace. A car ready when you are.',
    linkText: 'Explore self-drive',
    href: '#fleet',
    variant: 'self-drive',
  },
  {
    id: 'airport',
    index: '04 / ON TIME, EVERY TIME',
    icon: '✈',
    title: 'Airport pickup & drop',
    description: 'Reliable transfers — flight-tracked, always on time.',
    linkText: 'Book an airport ride',
    href: '#booking',
    variant: 'airport',
  },
];