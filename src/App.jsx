import { useState } from 'react';
import './App.css';
import ClimaActual from './components/ClimaActual/ClimaActual';
import ClimaSemana from './components/ClimaSemana/ClimaSemana';
import apiClima  from './services/apiClima'

function App() {
  const { data, filtered, formEnviar, butonEnviar, cambioCiudad, openModal, closeModal, isModalOpen, fechaFormateada,units, secondApi,
     cambioGradosC, cambioGradosF, enviarUbicacion } = apiClima();

  return (
    <div className='appClima'>
     <div>
       <ClimaActual  formEnviar={formEnviar} butonEnviar={butonEnviar}  cambioCiudad={cambioCiudad}  fechaFormateada={fechaFormateada}  enviarUbicacion={enviarUbicacion} 
      filtered= {filtered} data={data} openModal={openModal}   closeModal={closeModal} isModalOpen={isModalOpen} units={units}    />
      </div>
      <div>
       <ClimaSemana data={data} cambioGradosC={cambioGradosC} cambioGradosF={cambioGradosF}  secondApi={secondApi}  units= {units} />
      </div>

    </div>
  )
}

export default App
