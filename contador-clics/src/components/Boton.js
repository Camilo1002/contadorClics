import React from 'react';
import '../styles/boton.css'

function Boton({texto, esBotonDeclic, manejarClic}) {
  return(
    <button
    className= {esBotonDeclic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic}>
      {texto}
    </button>
  )
  
}

export default Boton;