import React, { useState }  from 'react'
import Tarjeta from './Tarjeta'




const Form = ({setEstilos, estilos}) => {

  const [f, setF] = useState({
    nombre: '',
    modelo: '', 
    piloto: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()
      if(f.nombre.length > 3 && f.modelo.length > 4) {
          setShow(true)
          setError(false)
      } else {
          setError(true)
          setShow(false)
         }
       }
   



  return (
    <div >
      <form className='tarjeta' onSubmit={handleSubmit}>
        <label >Autos F1</label>
        <input type="text" onChange={(e) => setF((prevF) => ({...prevF, nombre: e.target.value}))}/>

        <label >Marca </label>
        <input type="text" onChange={(e) => setF((prevF) => ({...prevF, modelo: e.target.value}))}/>

        <label >Piloto</label>
        <input type="text" onChange={(e) => setF((prevF1) => ({...prevF1, piloto: e.target.value}))}/>

        {/* {error && 'Por favor chequea que la información sea correcta'} */}
        {/* {show ? <h2>Datos cargados exitosamente</h2> : null} */}
      

        <label>Fondo:</label>
        <select onChange={(e) => setEstilos((prevEstilos) => ({...prevEstilos, background: e.target.value})) }>
            <option value="red">red</option>
            <option value="black">black</option>
            <option value="yellow">yellow</option>
            <option value="transparent">transparente</option>
            <option value="pink">pink</option>
            <option value="orange">orange</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>

        <label>Color de letra:</label>
        <select  onChange={(e) => setEstilos((prevEstilos) => ({...prevEstilos, color: e.target.value})) }>
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="orange">orange</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
        <button type='submit'>Mandar publicacion</button>
      </form>

      {show ? <Tarjeta f={f} estilos={estilos}/> : ''}
      {error && 'Por favor chequea que la información sea correcta'}

      

    </div>
  )
}

export default Form