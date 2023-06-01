import React from 'react'
import { useState } from 'react'



const Form = ({setF1, f1, setStyles}) => {

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()
      if(f1.nombre.length > 3 || f1.nombre.trim() !== f1.nombre && f1.modelo.length > 6) {
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
        <input type="text" onChange={(e) => setF1((prevF1) => ({...prevF1, nombre: e.target.value}))}/>

        <label >Marca </label>
        <input type="text" onChange={(e) => setF1((prevF1) => ({...prevF1, modelo: e.target.value}))}/>

        <label >Piloto</label>
        <input type="text" onChange={(e) => setF1((prevF1) => ({...prevF1, piloto: e.target.value}))}/>

        {error && 'Por favor chequea que la información sea correcta'}
        {show ? <h2>Datos cargados exitosamente</h2> : null}
      

        <label>Fondo:</label>
        <select onChange={(e) => setStyles((prevStyles) => ({...prevStyles, background: e.target.value})) }>
            <option value="transparent">transparent</option>
            <option value="black">black</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="orange">orange</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>

        <label>Color de letra:</label>
        <select  onChange={(e) => setStyles((prevStyles) => ({...prevStyles, color: e.target.value})) }>
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="orange">orange</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
        <button>Mandar publicacion</button>
      </form>

      

    </div>
  )
}

export default Form