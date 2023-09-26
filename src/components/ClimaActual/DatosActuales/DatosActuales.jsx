import React from 'react'
import './DatosActuales.css'

function DatosActuales({data, fechaFormateada}) {
  return (
    <div className='datosB'>
      <div className='datosActuales'>
        <div> 
          <label htmlFor="" className='fecha'>{fechaFormateada} </label>
        </div>
        <div>
            <label  className='pais'> <i class="fa-solid fa-location-dot" ></i> {data?.name} </label>
        </div>
      </div>
    </div>
  )
}

export default DatosActuales