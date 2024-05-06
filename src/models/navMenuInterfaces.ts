export interface NavMenu {
  menus: NavMenuItem[];
}

export interface NavMenuItem {
  title: string;
  links?: NavMenuLink[];
  isLink: boolean;
  href?: string;
  isDisabled?: boolean;
  isHidden?: boolean;
}

export interface NavMenuLink {
  title: string;
  href?: string;
  isDisabled?: boolean;
  description?: string;
  isHidden?: boolean;
}
