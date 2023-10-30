import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import SocialLinks from "../../views/SocialLinks/SocialLinks";

const NavBar = ({ isTransparent }) => {
  const containerClassName = `${style.mainContainer} ${
    isTransparent ? style.transparent : ""
  }`;
  return (
    <div className={containerClassName}>
      <Link to="/">
        <Logo className={style.logo} />
      </Link>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
      <SocialLinks className={style.socialLinks} />
    </div>
  );
};

export default NavBar;
