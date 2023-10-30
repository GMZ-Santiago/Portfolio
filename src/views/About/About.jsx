/* About.jsx */

import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.description}>
        <h1>Acerca de mí</h1>
        <p>
          Soy un apasionado Desarrollador Web FullStack, con sede en la hermosa ciudad de Paso de los Libres, en la provincia de Corrientes, Argentina.
        </p>
        <p>
          Mi apasionante viaje en el mundo del desarrollo comenzó en 2023, cuando decidí explorar este emocionante campo por mi cuenta. A medida que profundizaba en la programación y la creación de aplicaciones, me di cuenta de que quería llevar mi conocimiento y habilidades al siguiente nivel.
        </p>
        <p>
          Fue entonces cuando tomé la decisión de unirme a Soy Henry, donde he tenido la oportunidad de participar en un riguroso programa de formación técnica y científica. Esta experiencia me ha proporcionado una base sólida y una comprensión profunda de las tecnologías actuales, así como la capacidad de abordar desafíos técnicos de manera efectiva.
        </p>
        <p>
          Estoy comprometido a abordar y resolver una amplia gama de problemas, desde la creación de aplicaciones web hasta el desarrollo de soluciones técnicas innovadoras. Siempre estoy listo para aprender nuevas tecnologías y enfoques con el objetivo de impulsar mi carrera en el mundo de la tecnología.
        </p>
        <p>
          ¡Es un placer compartir este viaje contigo y estoy emocionado por lo que el futuro nos depara en el campo del desarrollo web!
        </p>
      <hr className={style.linea}/>
      </div>
      <img src={"yo2.jpg"} alt="Tu Otra Foto" className={style.tuOtraFoto} />
    </div>
  );
};

export default About;
