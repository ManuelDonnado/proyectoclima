import React from 'react'
import './Temperatura.css'

function Temperatura({data, units}) {

  if (!data) {
    return null; 
  }

  return (
    <div className='marcoTemperatura'>
        <div className='grados'>
           <label htmlFor="temperatura" className='textG'>  {data.main.temp} </label> 
           {units === 'metric' ? 
           (<label htmlFor="" className='subText'>°C </label>) :(<label htmlFor="" className='subText'>°F </label>) }
        </div>
        <div>
           <label htmlFor="status"  className='textS' > {data?.weather[0].main}</label>
        </div>
        <div>
           <label htmlFor="description"  className='subTextS' > {data?.weather[0].description}</label>
        </div>
    </div>
  )
}

export default Temperatura