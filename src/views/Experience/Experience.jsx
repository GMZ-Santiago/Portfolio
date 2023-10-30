import React from "react";
import style from "./Experience.module.css"; 

function MiExperiencia() {
  return (
      <div className={style.experiencia}>
      <div className={style.content}>
        <hr className={style.linea}/>
        <br/>
        <h1 className={style.h1}>Experiencia</h1>
        <h4 className={style.p}>Agosto 2023 - Septiembre 2023</h4>
        <p>
          He trabajado en diversos proyectos, incluyendo la creación de sitios web
          interactivos y aplicaciones web.
        </p>

        <p>
          Durante mi proyecto final, he trabajado con mi grupo para lograr un
          E-Commerce competitivo, implementando tecnologías avanzadas, para así
          conseguir una aplicación robusta, atractiva e innovadora, la cual cumple
          una función híbrida entre E-Commerce y MarketPlace de Vinilos para
          tocadiscos.
        </p>
        <p>
          Mi enfoque principal ha sido el desarrollo con tecnologías como HTML,
          CSS, JavaScript, React, Node.js y bases de datos SQL. También
          tengo experiencia en la creación e implementación de autenticación de
          usuarios.
        </p>
        <p>
          Estoy apasionado por aprender nuevas tecnologías y mantenerme
          actualizado con las últimas tendencias en desarrollo web. Siempre me
          esfuerzo por crear soluciones eficientes y atractivas para los proyectos
          en los que trabajo.
        </p>
      </div>
      <div className={style.imageContainer}>
        <img src="codeo.jpg" alt="Imagen de ejemplo" className={style.image} />
      </div>
    </div>
  );
}

export default MiExperiencia;
