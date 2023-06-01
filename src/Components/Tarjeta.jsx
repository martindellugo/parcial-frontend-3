import React from 'react'

const Tarjeta = ({f1, styles}) => {

  const estilos = {backgroundColor: styles.background, color: styles.color}
return (
  <div className='tarjeta' style={estilos}>
      <h3>El auto es: {f1.nombre}</h3>
      <h4>La marca o modelo es: {f1.modelo}</h4>
      <h2>Que Autaso!!</h2>
      <h4>Piloto: {f1.piloto}</h4>
  </div>
)
}

export default Tarjeta