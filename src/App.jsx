import { useState } from 'react'
import './App.css'
import Tarjeta from './Components/Tarjeta'
import Form from './Components/Form'

function App() {

  const [f1, setF1] = useState({
    nombre: '',
    modelo: '', 
    piloto: ''
  })
  const [styles, setStyles] = useState({
    background: 'transparent',
    color: 'white'
  })

  
  

  return (
    <>
      <h1>Autos Clasicos</h1>
      
      <Form f1={f1} setF1={setF1} setStyles={setStyles}/>
      <Tarjeta f1={f1} styles={styles}/>

      
    </>
  )
}

export default App
