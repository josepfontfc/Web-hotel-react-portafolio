import React, { useState, useRef } from "react";
import Slider from "./Slider";
import Servicios from "./Servicios";
import Roomfilter from "./Roomfilter";
import Contacto from "./Contacto";
import "./hamburgermenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Referencias para cada sección
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  //Alterna el estado de isOpen, que controla si el menú está abierto o cerrado.
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //Navega a una sección específica de la página y cierra el menú desplegable.
  const scrollToSection = (ref) => {
    setIsOpen(true); 
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hamburger-menu">
      <div class="contenedor-menu">
        <button
          className={`hamburger ${isOpen ? "" : "open"}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav>
          <ul
            className={`menu ${isOpen ? "open" : "close"}`}
            onClick={toggleMenu}
          >
            <li onClick={() => scrollToSection(homeRef)}>Inicio</li>
            <li onClick={() => scrollToSection(aboutRef)}>Servicios</li>
            <li onClick={() => scrollToSection(servicesRef)}>Habitaciones</li>
            <li onClick={() => scrollToSection(contactRef)}>Contacto</li>
          </ul>
        </nav>
      </div>
      {/* Secciones de la página */}
      <div ref={homeRef}>
        <div>
          <Slider />
        </div>
      </div>
      <div ref={aboutRef} className="section-servicios">
        <Servicios />
      </div>
      <div ref={servicesRef} className="section">
        <div>
          <Roomfilter />
        </div>
      </div>
      <div ref={contactRef} className="section-contacto">
        <div>
          <Contacto />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
