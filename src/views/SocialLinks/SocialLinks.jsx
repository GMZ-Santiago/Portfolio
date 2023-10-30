import React from "react";
import style from "./SocialLinks.module.css"; // Asegúrate de importar tus estilos CSS

const SocialLinks = () => {
  return (
    <div className={style.linksContainer}>
      <a
        href="https://github.com/GMZ-Santiago"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <img
          src="github.png"
          alt="GitHub"
          className={style.logo}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/santiago-gomez-tartaglino-766a19268/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <img
          src="linkedin.png"
          alt="LinkedIn"
          className={style.logo}
        />
      </a>
      <a
        href="https://www.facebook.com/santiago.gomeztartaglino/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <img
          src="facebook.png"
          alt="Facebook"
          className={style.logo}
        />
      </a>

      <a
        href="https://www.instagram.com/santi_gomez_/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        <img
          src="instagram.png"
          alt="Instagram"
          className={style.logo}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
