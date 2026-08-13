export type MenuLink = {
  name: string;
  href: string;
  external: boolean;
};

export type MenuGroup = {
  name: string;
  children: readonly MenuLink[];
};

export type MenuItem = MenuLink | MenuGroup;

export function isMenuGroup(item: MenuItem): item is MenuGroup {
  return 'children' in item;
}

export const menuItems = [
  { name: 'Home', href: '/', external: false },
  { name: 'About', href: '/about', external: false },
  { name: 'Blog', href: 'https://blog.bluenyang.kr/', external: true },
  {
    name: 'GitHub',
    children: [
      { name: 'Bluenyang', href: 'https://github.com/bluenyang/', external: true },
      { name: 'Croffle Dev.', href: 'https://github.com/team-croffle/', external: true },
      { name: 'Gamesung Coding', href: 'https://github.com/gscd-dev/', external: true },
    ],
  },
  { name: 'Downloads', href: 'https://dl.bluenyang.kr/public/', external: true },
  { name: 'Docs', href: 'https://docs.bluenyang.kr/s/public', external: true },
] as const satisfies readonly MenuItem[];
