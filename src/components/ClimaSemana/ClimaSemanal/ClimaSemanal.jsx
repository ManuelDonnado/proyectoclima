import { useState} from 'react'
import { DateTime } from 'luxon'
import './ClimaSemanal.css'
import shower from '../../../assets/images/Shower.png'
import clear from '../../../assets/images/clear.png'
import HeavyCloud from '../../../assets/images/HeavyCloud.png'
import HeavyRain from '../../../assets/images/HeavyRain.png'
import LightCloud from '../../../assets/images/LightCloud.png'
import LightRain from '../../../assets/images/LightRain.png'
import Sleet from '../../../assets/images/Sleet.png'
import Snow from '../../../assets/images/Snow.png'
import Thunderstorm from '../../../assets/images/Thunderstorm.png'

function ClimaSemanal({secondApi, units}) {

  const getWeatherImage = (weather,description) => {
    if ((weather == 'Rain') && (description.includes('shower'))) {
      return <img src={shower} alt="clima" className='imgclima1' style={{ width: '56.44px', height: '62px' }} />;
    } else if (weather == 'Clear') {
      return <img src={clear} alt="clima" className='imgclima1' style={{ width: '56.44px', height: '62px' }} />;
    } else if ((weather == 'Clouds') && (description.includes('overcast'))) {
      return <img src={HeavyCloud} alt="clima" className='imgclima1' style={{ width: '56.44px', height: '62px' }} />;
    } else if ((weather == 'Rain') && (description.includes('heavy'))) {
      return <img src={HeavyRain} alt="clima" className='imgclima1' style={{ width: '56.44px', height: '62px' }} />;
    } else if (weather == 'Clouds') {
      return <img src={LightCloud} alt="clima" className='imgclima1' style={{ width: '56.44px', height: '62px' }}  />;
    } else if (weather == 'Rain') {
      return <img src={LightRain} alt="clima" className='imgclima1' style={{ width: '56.44px', height: '62px' }} />;
    } else if ((weather == 'Snow') && (description.includes('sleet'))) {
      return <img src={Sleet} alt="clima" className='imgclima1' style={{ width: '56.44px', height: '62px' }} />;
    } else if (weather == 'Snow') {
      return <img src={Snow} alt="clima" className='imgclima1' style={{ width: '56.44px', height: '62px' }} />;
    } else if (weather == 'Thunderstorm') {
      return <img src={Thunderstorm} alt="clima" className='imgclima1' style={{ width: '56.44px', height: '62px' }} />;
    } else {
      return <img src={clear} alt="clima" className='imgclima1' style={{ width: '56.44px', height: '62px' }} />;
    }
  };

  const fechaActual = DateTime.now().setZone('America/Mexico_City'); 
  const meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];  
  const diaMes = fechaActual.day; 
  const mesActual = fechaActual.month - 1; 
  const yearActual = fechaActual.year; 
  let fechaAct = yearActual + "-" + mesActual + "-" + diaMes;
  let hora = '';
  
  const pronostico = secondApi?.list.map((element, index) => { 
    const fechaDay =  element.dt_txt.substring(0, 10);
    const horaDay =  element.dt_txt.substring(12, 19);
    const fechaDayDate =DateTime.fromISO(fechaDay, { zone: 'America/Mexico_City' });
    const diaActualDate = fechaDayDate.setLocale('en').toFormat('EEE'); 
    const diaMesDate = fechaDayDate.day;
    const mesActualDate = meses[fechaDayDate.month - 1];
    const fechaFormat = diaActualDate + ", " + diaMesDate + " " + mesActualDate;
  
    if (index === 0) {
      hora = element.dt_txt.substring(12, 19);
    }
    
    if ((fechaAct !== fechaDay) && (horaDay === hora)) {
      fechaAct = fechaDay;
      const fechaFormateada = index === 0 ? 'Tomorrow' : fechaFormat;
      const temp_min = element.main.temp_min ;
      const temp_max = element.main.temp_max;
      const weather = element.weather[0].main;
      const description = element.weather[0].description;

      return (<div key={index} className='card'>
                  <div className='containerCard'>
                      <div>    <label htmlFor="">{fechaFormateada}  </label> </div>
                      <div className='imgClima1'  id='imgclima1' > {getWeatherImage(weather,description)} </div>
                  </div>
                  {units === 'metric' ? 
                    (   <div className='gradosSemana'>  <label htmlFor="" className='maxtemp'>{temp_max}°C</label>  <label htmlFor="" className='mintemp'> {temp_min}°C</label>  </div>  ) :
                    (   <div className='gradosSemana'>  <label htmlFor="" className='maxtemp'>{temp_max}°F</label>  <label htmlFor="" className='mintemp'> {temp_min}°F</label>  </div> )
                    }
              </div>
      ); 
    } else {
      
      return null;
    }  
});
  return (
    <div className='semanalBody'>

    <div>
         {pronostico}
    </div>

    </div>
  )
}

export default ClimaSemanal