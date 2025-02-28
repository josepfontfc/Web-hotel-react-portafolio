import React, { useState, useRef, useCallback } from "react";
import "./Contactostyles.css";
import fotoentrada from "../assets/entrada-hotel.jpg";

const ContactForm = () => {
  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Referencias para los inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // Manejador del submit
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Aquí podrías enviar los datos a un servidor, por ejemplo.
      // Simularemos un envío con setTimeout
      setTimeout(() => {
        console.log("Nombre:", name);
        console.log("Email:", email);
        console.log("Mensaje:", message);

        // Limpiar el formulario después del envío
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitting(false);

        // Hacer foco en el primer campo después de enviar
        nameRef.current.focus();
      }, 2000);
    },
    [name, email, message]
  );

  return (
    <div className="contact-form">
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <div className="titulo-form">Formulario de Contacto - Hotel</div>
        <div className="form-group">
          <label className="label-formulario" htmlFor="name">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label-formulario" htmlFor="email">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label-formulario" htmlFor="message">
            Mensaje:
          </label>
          <textarea
            id="message"
            ref={messageRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="form-group-button">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
      <div className="contenedor-foto-form">
        <img src={fotoentrada} className=" foto-form" alt="foto" />
      </div>
    </div>
  );
};

export default ContactForm;
