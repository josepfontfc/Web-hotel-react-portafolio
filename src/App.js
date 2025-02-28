import React from "react";
import "./App.css";
import HamburgerMenu from "./components/hamburgermenu";
import Footer from "./components/footer";
// Organiza la estructura principal de la aplicación.
 //Renderiza dos componentes: HamburgerMenu y Footer.
function App() {
  return (
    <div className="App">
      <div>
        {" "}
        <HamburgerMenu />
      </div>
      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}

export default App;
