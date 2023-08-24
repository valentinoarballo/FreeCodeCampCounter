import logo from './logo.svg';
import './App.css';
import logoitec from './images/image.png'; 
import Boton from './components/boton';
import Contador from './components/contador';
import { useState } from 'react';


function App() {

  const [numClics, SetNumClics] = useState(1);

  const manejarClic = () => {
    SetNumClics(numClics * 2);
  };

  const reiniciarContador = () => {
    SetNumClics(1);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='frecodecamp-logo' 
        src = {logoitec}
        alt = 'Logo del Itec'
        />
      </div>
      <div className='contenedor-contador'>

        <Contador numClics={numClics} />

        <Boton 
        texto = "Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        
        <Boton
        texto = "Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      
      </div>
    </div>
  );
}

export default App;
