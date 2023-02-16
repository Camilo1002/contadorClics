import "./App.css";
import Contador from "./components/Contador";
import Boton from './components/Boton';
import { useState } from "react";

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClics = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador numClics={numClics}/>
        <Boton 
          texto="Clic" 
          esBotonDeclic={true} 
          manejarClic={manejarClics} 
          />

        <Boton
          texto="Reiniciar"
          esBotonDeclic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
