import React from 'react'
import ButtonSearch from './ButtonSearch/ButtonSearch'
import Ubicacion from './Ubicacion/Ubicacion'
import ClimaDinamico from './ClimaDinamico/ClimaDinamico'
import './ClimaActual.css'
import Temperatura from './Temperatura/Temperatura'
import DatosActuales from './DatosActuales/DatosActuales'

function ClimaActual({ data, filtered, formEnviar, butonEnviar, cambioCiudad, openModal, closeModal, isModalOpen, fechaFormateada, units, enviarUbicacion } ) {
  return (
    <div > 


    <div className='busqueda'>
        <div  className='botonS' >
        <ButtonSearch   filtered={filtered} formEnviar={formEnviar} butonEnviar={butonEnviar}  
         cambioCiudad={cambioCiudad} openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen}  />   
        </div>
        <div className='ubicacionS' >
        <Ubicacion  enviarUbicacion={enviarUbicacion} /> 
        </div> 
      </div>

      <div>
    <ClimaDinamico  data = {data} />
    </div>

    <div>
      <Temperatura   data={data} units={units} />
    </div>

    <div>
      <DatosActuales data={data}  fechaFormateada={fechaFormateada}/>
    </div>


    </div>


  )
}

export default ClimaActual