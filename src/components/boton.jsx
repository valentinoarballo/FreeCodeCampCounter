import React from "react";
import '../stylesheets/boton.css';

function Boton ({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button 
    className={esBotonDeClic ? 'botonClic': 'botonRei'}
    onClick={manejarClic}>
    {texto}
    </button>
  );
}

export default Boton;