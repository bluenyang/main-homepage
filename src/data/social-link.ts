export type ContactEmail = {
  address: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export const contactEmails = [
  { address: 'contact@bluenyang.kr' },
  { address: 'bluenyang@croffledev.kr' },
] as const satisfies readonly ContactEmail[];

export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/bluenyang', icon: 'mdi:github' },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/bluenyang2251/',
    icon: 'mdi:instagram',
  },
  { name: 'Blog', href: 'https://blog.bluenyang.kr/', icon: 'lucide:coffee' },
  { name: 'Downloads', href: 'https://dl.bluenyang.kr/public/', icon: 'mdi:download' },
  {
    name: 'Docs',
    href: 'https://docs.bluenyang.kr/s/public/',
    icon: 'mdi:file-document-outline',
  },
] as const satisfies readonly SocialLink[];
