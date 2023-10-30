import React from "react";
import style from "./Logo.module.css"; // Asegúrate de importar tus estilos CSS

const Logo = () => {
  return (
    <div className={style.linksContainer}>
      <a
        href="#home"
      >
        <img src="logo.png" 
        alt="Logo"
        className={style.logo} />
      </a>
    </div>
  );
};

export default Logo;
