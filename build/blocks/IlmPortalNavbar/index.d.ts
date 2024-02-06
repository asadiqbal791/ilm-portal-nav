import { MouseEventHandler } from "react";
interface SidebarUri {
    path: string;
    icon?: string;
    name: string;
}
export declare const IlmPortalNavbar: ({ onPortalChange, auth, logout, toggleMenu, menuState, orgs, onChangeOrgName, onChangeOrg, onSwitchOrg, sidebarUris, switchPopup, }: {
    auth?: {
        currentUser: {
            photoURL: string;
            displayName: string;
            email: string;
        };
    };
    logout?: MouseEventHandler<HTMLElement>;
    menuState: Boolean;
    toggleMenu?: () => void;
    onPortalChange?: (portal: string) => void;
    orgs?: Array<{
        name: string;
        displayName: string;
        createdAt: string;
        branding: {
            logo_url: string;
        };
    }> | null;
    onChangeOrgName?: (org: string) => void;
    onChangeOrg?: (org: Object) => void;
    onSwitchOrg?: () => void;
    sidebarUris?: Array<SidebarUri>;
    switchPopup?: boolean;
}) => JSX.Element;
export {};
