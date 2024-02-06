import React, { MouseEventHandler } from "react";


declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

interface SidebarUri {
  path: string;
  icon?: string;
  name: string;
}
// Declaration file for types and exports from npm-package
declare module "ilm-portal-nav" {
  interface IlmPortalNavbarProps {
    auth?: { currentUser: { photoURL: string; displayName: string; email: string } };
    logout?: MouseEventHandler<HTMLElement>;
    menuState: Boolean;
    onPortalChange?: (portal: string) => void;
    onSwitchOrg?: () => void;
    sidebarUris?: Array<SidebarUri>;
    switchPopup?: boolean;
    children?: React.ReactNode;
  }

  export const IlmPortalNavbar: React.FC<IlmPortalNavbarProps>;
}