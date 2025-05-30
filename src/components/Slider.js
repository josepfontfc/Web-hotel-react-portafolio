import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";

const len = sliderImage.length - 1; //almacena el índice del último elemento (sliderImage.length - 1).

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
// Cambia automáticamente la imagen activa cada 5 segundos.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    // Renderiza el carrusel de imágenes y sus controles (contenido, flechas y puntos)
    <div className="slider-container">
      <div className="texto-bienvenida">Bienvenido a nuestro hotel</div>
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} /> 
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      /> 
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
