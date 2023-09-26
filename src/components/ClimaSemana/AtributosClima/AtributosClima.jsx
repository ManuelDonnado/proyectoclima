import React from 'react'
import './AtributosClima.css'

function AtributosClima({data}) {
  return (
    <div className='atributosBody'>
      
        <div className='tittle'>
          <label htmlFor=""  >Today´s Hightlights  </label> 
        </div>
     <div className='atributos'>
        <div class='card1' > 
          <h2 className='textAt'>Wind Status</h2>
        <h1 className='valorText' >  {data?.wind.speed} <label htmlFor="">mph</label> </h1> 
          <div >
         <button  className='btnWind'> <i class="fa-solid fa-location-arrow fa-rotate-180"></i> </button> 
         <label htmlFor=""className='windText'> wsw </label>
         </div>
        </div>
        
        <div class='card1' > 
          <h2 className='textAt'>Humidity</h2>
          <h1 className='valorText'> {data?.main.humidity} <label htmlFor="">%</label> </h1>
          <div className="progress-container">
          <div className="markers">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
            <div className="progress-bar" style={{ width: `${data?.main.humidity}%` }}></div>
          </div>
          <h2></h2>
        </div>

        <div class='card2' > 
          <h2 className='textAt'>Visibility</h2>
          <h1 className='valorText'> {data?.visibility / 1000}   <label htmlFor="">miles</label> </h1>
        </div>

        <div class='card2' > 
          <h2 className='textAt'>Air Pressure</h2>
          <h1 className='valorText'> {data?.main.pressure}  <label htmlFor="">mb</label>  </h1>  
        </div>
        <div className='userDev'>
          <label htmlFor="">create by ManuelDonado - devChellenges.io</label>
         </div>

      </div>

      
    </div>
  )
}

export default AtributosClima