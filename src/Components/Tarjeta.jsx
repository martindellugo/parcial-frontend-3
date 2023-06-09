import React from 'react'

const Tarjeta = ({f, estilos}) => {

  const stilo = {backgroundColor: estilos.background, color: estilos.color}
return (
  <div className='tarjeta' style={stilo}>
      <h3>El auto es: {f.nombre}</h3>
      <h4>La marca o modelo es: {f.modelo}</h4>
      <h2>Que Autaso!!</h2>
      <h4>Piloto: {f.piloto}</h4>
  </div>
)
}

export default Tarjeta