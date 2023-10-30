import React from "react";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <h1 className={style.inicio1}>Santiago Gómez Tartaglino</h1>
      <h1 className={style.inicio2}>Fullstack Developer</h1>
      <h1 className={style.inicio3}>enfocado en la</h1>
      <h1 className={style.innovacion}>constante innovación</h1>
      <div className={style.buttonContainer}>
        <a
          href="/CV_SantiagoGómezTartaglino.pdf"
          download="CV_SantiagoGómezTartaglino.pdf"
        >
          <button className={style.cv}>
            <h2>Descargar CV 📩</h2>
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/14ydekNW0MTRV62Dt7NR9OyLxdHtz1B1F/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <button className={style.cv2}>
            <h2>Abrir 📤</h2>
          </button>
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Home;
