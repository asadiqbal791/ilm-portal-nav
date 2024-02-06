import React, { MouseEventHandler } from "react";
interface SidebarUri {
    path: string;
    icon: React.ReactNode;
    name: string;
}
export declare const IlmPortalNavbar: ({ onPortalChange, auth, logout, menuState, onSwitchOrg, sidebarUris, switchPopup, children }: {
    auth?: {
        currentUser: {
            photoURL: string;
            displayName: string;
            email: string;
        };
    };
    logout?: MouseEventHandler<HTMLElement>;
    menuState: Boolean;
    onPortalChange?: (portal: string) => void;
    onSwitchOrg?: () => void;
    sidebarUris?: Array<SidebarUri>;
    switchPopup?: boolean;
    children?: React.ReactNode;
}) => JSX.Element;
export {};
