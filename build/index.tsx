import React, { MouseEventHandler, useState } from "react";

import { RiMenu2Fill } from "react-icons/ri";
import { RiBarChartBoxLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { BsArrowClockwise } from "react-icons/bs";
import { TbUserPlus } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";


interface SidebarUri {
  path: string;
  icon: React.ReactNode;
  name: string;
}

export const IlmPortalNavbar = ({
  onPortalChange,
  auth,
  logout,
  menuState = false,
  onSwitchOrg = () => { },
  sidebarUris = [],
  switchPopup = false,
  children = null
}
  : {
    auth?: { currentUser: { photoURL: string; displayName: string; email: string } };
    logout?: MouseEventHandler<HTMLElement>;
    menuState: Boolean;
    onPortalChange?: (portal: string) => void;
    onSwitchOrg?: () => void;
    sidebarUris?: Array<SidebarUri>;
    switchPopup?: boolean;
    children?: React.ReactNode;

  }
) => {
  const [sidebarClass, setSidebarClass] = useState("");
  const [sidebarClassMobile, setSidebarClassMobile] = useState("");
  const toggleHideClass = () => {
    setSidebarClass((prevClass) =>
      prevClass.includes("active") ? "" : "active"
    );
  };
  const addActiveClass = () => {
    setSidebarClassMobile('show')
  };
  const removeActiveClass = () => {
    setSidebarClassMobile('')
  };

  return (
    <div className="allStudentsStreamPage">
      <header className="analytics-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-5 align-self-center d-flex gap-3">
            <a href="#" id='hamburger' onClick={addActiveClass}><RiMenu2Fill /></a>
              <div className="logo-wrapper" >
                <a href="#">
                  <img src={"./logo.png"} alt="logo-icon" />
                  <strong>ILMIYA</strong>
                </a>
                {menuState ? <div className="dropdown-div">
                  <div className="title">
                    <a href="#">
                      <img src={"./logo.png"} alt="logo-icon" />
                      <strong>ILMIYA</strong>
                    </a>
                  </div>
                  <ul className="list">
                    <li><a href="#"><IoSettingsOutline /><span>Settings</span></a></li>
                    <li><a href="#"><TbUserPlus /><span>Invite a member</span></a></li>
                    <li><a href="#"><BsFileEarmarkText /><span>View Directory</span></a></li>
                  </ul>
                  <ul className="list">
                    <li><a href="#"><CiCirclePlus /><span>Create a Account</span></a></li>
                    <li onClick={onSwitchOrg} ><a href="#"><BsArrowClockwise /><span className='more-icon'>Switch Space <MdKeyboardArrowRight /> </span></a></li>
                  </ul>
                </div>
                  :
                  null
                }
              </div>
            </div>
            <div className="col-md-8 col-7 align-self-center">
              <div className="header-menu">
                <ul className="icons-wrapper">
                  <li><a href="#"><img src={"./headerDotedIcon.svg"} alt="headerDotedIcon" /></a>
                    <div className="dropdown-div">
                      <ul className="page-list">
                        <li onClick={() => onPortalChange && typeof onPortalChange === "function" && onPortalChange('People')}><a href="#">
                          <div className="icon-wrapper"><MdOutlineDashboard /></div>
                          <span>Dashboard</span></a></li>
                        <li onClick={() => onPortalChange && typeof onPortalChange === "function" && onPortalChange('People')}><a href="#">
                          <div className="icon-wrapper"><TbUserSquare /></div>
                          <span>People</span></a></li>
                        <li onClick={() => onPortalChange && typeof onPortalChange === "function" && onPortalChange('Studio')}><a href="#">
                          <div className="icon-wrapper"><MdOutlineScreenSearchDesktop /></div>
                          <span>Studio</span></a></li>
                        <li onClick={() => onPortalChange && typeof onPortalChange === "function" && onPortalChange('Analytics')}><a href="#">
                          <div className="icon-wrapper"><RiBarChartBoxLine /></div>
                          <span>Analytics</span></a></li>
                        <li onClick={() => onPortalChange && typeof onPortalChange === "function" && onPortalChange('Admin')}><a href="#">
                          <div className="icon-wrapper"><MdOutlineAdminPanelSettings /></div>
                          <span>Admin</span></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <ul className="icon-list">
                      <li><a href="#"><img src={"./supportCircleIcon.svg"} alt="supportCircleIcon" /></a>

                      </li>
                      <li><a href="#"><img src={"./inboxIcon.svg"} alt="inboxIcon" /></a></li>
                      <li className="avatar"><a href="#"><img src={"./avatar.png"} alt="avatar"
                        className="avatar" /></a>
                        <div className="dropdown-div profile">
                          <div className="img-wrapper">
                            <img src={"./avatar.png"} alt="avatar" />
                          </div>
                          <div className="content-wrapper">
                            <p className="name">
                              Hello, {auth?.currentUser?.displayName}
                            </p>
                            <span className="span"><a href="#">Ilmiya</a></span>
                            <ul className="list">
                              <li><a href="#" className='online'>
                                <div className="text"><FaCircle /><span>Offline</span></div>
                              </a></li>
                              <li><a href="#"><TbUserSquare /><span>Profile</span></a></li>
                              <li><a href="#"><CgNotes /><span>Settings</span></a></li>
                              <li onClick={logout}><a href="#"><MdLogout /><span>Logout</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="overLay" className={sidebarClassMobile} onClick={removeActiveClass}></div>
      <div className="main-dashboard-wrapper">
        <div id="side-bar-wrapper" className={`${sidebarClass} ${sidebarClassMobile}`}>
          <div className="side-bar-title-wrapper">
            <a href="#">
              <img src={"./analyticsIcon.png"} alt="analyticsIcon" />
              <strong>Analytics</strong>
            </a>
          </div>
          <div className="sidebar-menu-wrapper">
            <ul className="sidebar-menu">
              {sidebarUris.map((uri, index) => (
                <li key={index}>
                  <a href={uri.path}>
                    {uri.icon}
                    <span className="span">{uri.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="close-icon-wrapper">
            <a
              href="#"
              className="sidebar-toggle-close"
              onClick={toggleHideClass}
            >
              <img src={"./sideBarColorIcon.svg"} alt="sideBarColorIcon" />
            </a>
          </div>
        </div>
        <div id="main-page-body-wrapper" className={sidebarClass}>
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </div>
  );
}