import React from 'react'
import Grados from './Grados/Grados'
import ClimaSemanal from './ClimaSemanal/ClimaSemanal'
import AtributosClima from './AtributosClima/AtributosClima'

function ClimaSemana({ data, cambioGradosC, cambioGradosF, secondApi, units}) {
  return (
    <div>

    <div>
        <Grados  cambioGradosC={cambioGradosC} cambioGradosF={cambioGradosF}  />
    </div>
        
    <div>
        <ClimaSemanal   secondApi={secondApi} units={units} />
    </div>

    <div>
        <AtributosClima  data={data}  />
    </div>

    </div>
  )
}

export default ClimaSemana