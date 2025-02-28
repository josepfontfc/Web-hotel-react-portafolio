import React from "react";

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all-dots">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
         // Cada punto tiene un evento onClick que ejecuta la función onclick pasada por las props, 
         // pasando como argumento el índice (index) de la diapositiva seleccionada.
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;