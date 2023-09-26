import React from 'react'
import './Grados.css'

function Grados( {cambioGradosC, cambioGradosF}) {
  return (
    <div  className='BGD'>

      <div className='buttons'>
        <button className='formatB' onClick ={cambioGradosC}> °C </button>
        <button className='formatA' onClick={cambioGradosF}> °F </button>
      </div>

      <div className='format'>
       
      </div>

      
    </div>
  )
}

export default Grados