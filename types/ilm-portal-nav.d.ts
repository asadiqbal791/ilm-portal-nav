import React, { MouseEventHandler } from "react";

interface SidebarUri {
  path: string;
  icon?: string;
  name: string;
}
// Declaration file for types and exports from npm-package
declare module "ilm-portal-nav" {
  interface IlmPortalNavbarProps {
    urls?: Array<{ name: string; path: string; icon?:string }> | null;
    auth?: { currentUser: { photoURL: string; displayName: string; email: string } };
    logout?: MouseEventHandler<HTMLElement>;
    menuState: Boolean;
    toggleMenu?: () => void;
    onPortalChange?: (portal: string) => void;
    orgs?: Array<{ name: string; displayName: string; createdAt: string; branding: { logo_url: string } }> | null;
    onChangeOrgName?: (org: string) => void;
    onChangeOrg?: (org: Object) => void;
    onSwitchOrg?: () => void;
    sidebarUris?: Array<SidebarUri>;
    switchPopup?: boolean;
  }

  export const IlmPortalNavbar: React.FC<IlmPortalNavbarProps>;
}
