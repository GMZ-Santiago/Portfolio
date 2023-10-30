import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
        <hr />
      <h1 className={style.contact}>¡Comunícate conmigo!</h1>
      <div className={style.contactItem}>
        <img src="gmail.png" alt="Ícono de Gmail" className={style.gmail} />
        <p>Escríbeme por Gmail</p>
        <a href="mailto:santugomezt@gmail.com" className={style.vinculos}>santugomezt@gmail.com</a>
        <img src="linkedin.png" alt="Ícono de LinkedIn" className={style.linkedin} />
        <p>Perfil de LinkedIn</p>
        <a href="https://www.linkedin.com/in/SantiagoGomezTartaglino" className={style.vinculos}>/in/SantiagoGómezTartaglino</a>
        <img src="github.png" alt="Ícono de GitHub" className={style.github} />
        <p>Perfil de GitHub</p>
        <a href="https://github.com/GMZ-Santiago" className={style.vinculos}>/GMZ-Santiago</a>
      </div>
      </div>
  );
};

export default Contact;
