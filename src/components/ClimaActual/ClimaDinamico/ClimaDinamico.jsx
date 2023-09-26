import React from 'react'
import './ClimaDinamico.css'
import shower from '../../../assets/images/Shower.png'
import clear from '../../../assets/images/clear.png'
import HeavyCloud from '../../../assets/images/HeavyCloud.png'
import HeavyRain from '../../../assets/images/HeavyRain.png'
import LightCloud from '../../../assets/images/LightCloud.png'
import LightRain from '../../../assets/images/LightRain.png'
import Sleet from '../../../assets/images/Sleet.png'
import Snow from '../../../assets/images/Snow.png'
import Thunderstorm from '../../../assets/images/Thunderstorm.png'



function ClimaDinamico({data}) {

    const getWeatherImage = () => {
    const mainWeather = data?.weather[0].main;
    const description = data?.weather[0].description;

    if ((mainWeather == 'Rain') && (description.includes('shower'))) {
      return <img src={shower} alt="clima" className='imgclima'/>;
    } else if (mainWeather == 'Clear') {
      return <img src={clear} alt="clima" className='imgclima'/>;
    } else if ((mainWeather == 'Clouds') && (description.includes('overcast'))) {
      return <img src={HeavyCloud} alt="clima" className='imgclima'/>;
    } else if ((mainWeather == 'Rain') && (description.includes('heavy'))) {
      return <img src={HeavyRain} alt="clima" className='imgclima'/>;
    } else if (mainWeather == 'Clouds') {
      return <img src={LightCloud} alt="clima" className='imgclima'/>;
    } else if (mainWeather == 'Rain') {
      return <img src={LightRain} alt="clima" className='imgclima'/>;
    } else if ((mainWeather == 'Snow') && (description.includes('sleet'))) {
      return <img src={Sleet} alt="clima" className='imgclima' />;
    } else if (mainWeather == 'Snow') {
      return <img src={Snow} alt="clima" className='imgclima' />;
    } else if (mainWeather == 'Thunderstorm') {
      return <img src={Thunderstorm} alt="clima" className='imgclima'/>;
    } else {
      return <img src={clear} alt="clima" className='imgclima'/>;
    }
  };

  return (
    <div id='climaToday'>
      <div>
        {getWeatherImage()}
      </div>
    </div>
  );


  return (
    <div id='climaToday'>

        <div >
          {console.log(data?.weather[0].description.includes('overcast'))}
           {data?.weather[0].main == 'rain' && data?.weather[0].description.includes('shower') ? 
           (<img src={shower} alt="clima" className='imgclima'/>):
           (data?.weather[0].main == 'clear' ? 
           (<img src={clear} alt="clima" className='imgclima'/>): 
          (data?.weather[0].main == 'clouds' && data?.weather[0].description.includes('overcast') ? 
          (<img src={HeavyCloud} alt="clima" className='imgclima'/>):
          (data?.weather[0].main == 'rain' && data?.weather[0].description.includes('heavy') ? 
          (<img src={HeavyRain} alt="clima" className='imgclima'/>):
          (data?.weather[0].main == 'Clouds' ?
          (<img src={LightCloud} alt="clima" className='imgclima'/>):
          (data?.weather[0].main == 'Rain' ?
          (<img src={LightRain} alt="clima" className='imgclima'/>):
          (data?.weather[0].main == 'snow' && data?.weather[0].description.includes('sleet') ? 
          (<img src={Sleet} alt="clima" className='imgclima' />):
          (data?.weather[0].main == 'Snow' ?
          (<img src={Snow} alt="clima" className='imgclima' />):
          (data?.weather[0].main == 'Thunderstorm' ?
          (<img src={Thunderstorm} alt="clima" className='imgclima'/>):
          (<img src={clear} alt="clima" className='imgclima'/>)
          ))))))))} 
        </div>
    </div>
  )
}

export default ClimaDinamico
