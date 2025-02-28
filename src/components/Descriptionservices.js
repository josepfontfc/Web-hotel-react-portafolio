import React from "react";
import "./Descriptionservicesstyles.css";



// Es un componente funcional que recibe props como argumentos
function Descriptionservices(props) {
  return (
    // Map se usa para iterar sobre los elementos del arreglo y generar dinámicamente un bloque para cada uno
    <div className="contenedor-principal">
      {props.details.map((value, id) => (
        <div className="contenedor-servicios" key={id}>
          <div className="contenedor-foto">
            <img src={value.img1} className=" foto-servicio " alt="foto" />
          </div>
          <div className="contenedor-descripcion">{value.description1}</div>
        </div>
      ))}
    </div>
  );
}

export default Descriptionservices;
