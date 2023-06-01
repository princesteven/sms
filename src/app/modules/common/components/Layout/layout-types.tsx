import { ReactNode } from "react";

export interface UserType {
  isLoggedIn: boolean;
  permissions: string[];
  name: string
  email: string
}

export interface MenuChildren {
  name: string;
  link: string;
  permissions?: string[];
}

export interface MenuWithoutChildren {
  name: string;
  link?: string;
  icon: any;
  permissions?: string[];
}

export interface Menus extends MenuWithoutChildren {
  children?: Array<MenuChildren>;
  childrenLinks?: Array<string>;
  permissions?: any,
}

export interface ItemType {
  danger?: boolean,
  disabled?: boolean,
  icon?: ReactNode,
  key: string,
  label: ReactNode,
  title?: string,
  children?: ItemType[]
}

export interface LayoutProps {
  logo?: string;
}
