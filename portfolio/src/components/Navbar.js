import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: "/img/icons/home.jpg" },
    { name: "Projects", path: "/projects", icon: "/img/icons/list.jpg" },
    { name: "About me", path: "/about", icon: "/img/icons/about.jpg" },
    { name: "Settings", path: "/settings", icon: "/img/icons/cog.jpg" },
  ];

  function closeSidebar() {
    setShowSideBar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          Martina Zurli<span> || Web Developer</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSideBar(!showSideBar)}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
