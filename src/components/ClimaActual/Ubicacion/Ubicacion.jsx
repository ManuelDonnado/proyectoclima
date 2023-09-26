import React from 'react'
import './Ubicacion.css'

function Ubicacion({enviarUbicacion} ) {
  return (
    <div className='ubicacion'>
      <button className='locate' onClick={enviarUbicacion}>
        <i class="fa-solid fa-location-crosshairs" ></i>
      </button>
    </div>
  )
}

export default Ubicacion