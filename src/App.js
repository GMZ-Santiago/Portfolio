import React, { useEffect, useState } from "react";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./views/Portfolio/Portfolio";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import MiExperiencia from "./views/Experience/Experience";

function App() {
  const [isNavTransparent, setIsNavTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Comprueba la posición del scroll para determinar la transparencia de la barra de navegación
      if (window.scrollY > 100) {
        setIsNavTransparent(true);
      } else {
        setIsNavTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar isTransparent={isNavTransparent} />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experiencia">
        <MiExperiencia/>
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
