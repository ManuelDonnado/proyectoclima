import { useState } from 'react';
import React from 'react';
import './ButtonSearch.css';
import Modal from './Modal';

function ButtonSearch({filtered, formEnviar, butonEnviar, cambioCiudad, openModal, closeModal, isModalOpen}) {

  



  return (
    <div className='ButtonSearch'>

        <div>
            <button className='search' onClick={openModal}> Search for places </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
         <form onSubmit={formEnviar}>
            <label htmlFor="name" className='tituloModal'>
               Escribe el nombre especifico de una ciudad:
            </label>
      
            <div className='modalbtn'>   
                <input type="text" className='textSearch'/>
                <button type="submit" className='citybtn'>Buscar</button>
            </div>
          </form> 
          <hr />
          <div>
            <label  className='tituloModal'>Filtra por coincidencia de texto:</label>
            <div id="options">
              <input type="text" onChange={cambioCiudad} />
                <ul> {filtered?.map((ciudad, i) => (
                  <li key={i}>
                    <button value={ciudad.name} onClick={butonEnviar}>{ciudad.name}</button>
                  </li>
                ))} </ul>
            </div>
          </div> 
        </Modal>

   
    

    </div>
  )
}

export default ButtonSearch