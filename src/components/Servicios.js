import React from "react";
// import Navbar from './Navbar';
import Descriptionservices from "./Descriptionservices";
import informacion from "./informacion";
import "./Serviciosstyles.css";
function Servicios() {
  return (
    <div>
      {/* <Navbar/> */}
    
      <div className="titulo-servicios">
        Ven a disfrutar de nuestros servicios
      </div>
      <div>
        <Descriptionservices details={informacion} /> 
      </div>
    </div>
  );
}

export default Servicios;
