export type MenuItem = {
  title: string;
  ref?: HTMLElement | string;
  href?: string;
  children?: MenuItem[];
  active?: boolean;
}