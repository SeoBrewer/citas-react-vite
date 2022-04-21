import Formulario from "./Formulario";
import Header from "./Header";
import ListadoPacientes from "./ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
