import {useEffect, useState } from 'react'
import {paises} from './paises.js';

function apiClima() {
    let key = '0405fea4c9e2be4d2d5887a68f063097';
    
    const [ciudad, setCiudad] = useState('puebla city');
    const [data, setData] = useState(null);
    const [filtered, setFiltered] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [units, setUnits] = useState('metric');
    const [location, setLocation] = useState(null);
    const [tipoUbicacion, setTipoUbicacion] = useState('coordenadas');
    const [secondApi, setSecondApi] = useState(null);


    const fechaActual = new Date();
    const diasSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const diaActual = diasSemana[fechaActual.getDay()];
    const diaMes = fechaActual.getDate();
    const meses = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const mesActual = meses[fechaActual.getMonth()];
    const fechaFormateada = `Today . ${diaActual}, ${diaMes} ${mesActual}`;

    const getData = async (url, setDatos) => {
      try {
        const res = await fetch(url);
        const datos = await res.json();
        setDatos(datos);   
      }  catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }   
      };

      useEffect(() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;
            setLocation({ latitud, longitud });
          });
        } else {
          console.log("El navegador no admite la geolocalización.");
        }
      }, []);
     
      useEffect(() => {
      let url= '';

        if (location && tipoUbicacion === 'coordenadas'){
            url= `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitud}&lon=${location.longitud}&appid=${key}&units=${units}`; 
        } else 
        {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=${units}`;
        }
        getData(url, setData); 
      }, [tipoUbicacion,ciudad,units]);//

      useEffect(() => {
        if (data) {
          const secondApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${key}&units=${units}`;
          getData(secondApiUrl, setSecondApi);
        }
      }, [data]);
    


      const enviarUbicacion = () => {
        setTipoUbicacion('coordenadas');
      };

      const formEnviar = (e) => {
        e.preventDefault();
        const ciudadName = e.target[0].value;
        setTipoUbicacion('ciudad');
        setCiudad(ciudadName);
        closeModal();
      };

      const butonEnviar = (e) => {
        const ciudadName = e.target.value;
        setTipoUbicacion('ciudad');
        setCiudad(ciudadName);
        setFiltered([]);
        closeModal();
      };
    
      const cambioCiudad = (e) => {
        setFiltered([]);
        const value = e.target.value.toLowerCase();
        const dataFiltered =
          value === ""
            ? []
            : paises.filter((ciudad) => ciudad.name.includes(value));
        setFiltered(dataFiltered);
      };

      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      }; 

      const cambioGradosC = () => {
        const centigrados = 'metric';
        setUnits(centigrados);
      };
    
      const cambioGradosF = () => {
        const farenheit = 'imperial';
        setUnits(farenheit);
      };

      return { data, filtered, formEnviar, butonEnviar, cambioCiudad, openModal, closeModal, isModalOpen, fechaFormateada, secondApi,
         units, cambioGradosC, cambioGradosF, enviarUbicacion  };
}

export default apiClima;