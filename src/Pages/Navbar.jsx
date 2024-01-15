import "../Style/navbar.css";
import React, { useEffect, useState } from "react";
import Menu from "../Images/menu.svg";
import Cancel from "../Images/cancel.svg";
import Logo from "../Images/logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [remove, setRemove] = useState("nav-links-mobile-removed");
  const [icon, setIcon] = useState(Menu);

  const changeStyle = () => {
    if (remove !== "nav-links-mobile-removed") {
      setRemove("nav-links-mobile-removed");
      setIcon(Menu);
    } else {
      setRemove("nav-links-mobile");
      setIcon(Cancel);
    }
  };

  const removeMenus = () => {
    if (isMobile) {
      setRemove("nav-links-mobile-removed");
      setIcon(Menu);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 769;
        if (ismobile !== isMobile) {
          setIsMobile(ismobile);
        }
      },
      false
    );
  }, [isMobile]);

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <a href="#">
          <img className="logo" src={Logo} alt="" />
        </a>
      </div>
      <div className="nav-links-container">
        <div className={`${isMobile ? remove : "nav-links"}`}>
          <a
            className={`${isMobile ? "nav-link-tag-mobile" : "nav-link-tag"}`}
            href="#progress"
            onClick={() => removeMenus()}
          >
            PROGRESS
          </a>
          <a
            className={`${isMobile ? "nav-link-tag-mobile" : "nav-link-tag"}`}
            href="#photos"
            onClick={() => removeMenus()}
          >
            PHOTOS
          </a>
          <a
            className={`${isMobile ? "nav-link-tag-mobile" : "nav-link-tag"}`}
            href="#messages"
            onClick={() => removeMenus()}
          >
            MESSAGES
          </a>
        </div>
        <button
          className="nav-menu-icon"
          onClick={() => {
            changeStyle();
          }}
        >
          <img className="nav-menu-cancel-icon" src={icon} alt="icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
