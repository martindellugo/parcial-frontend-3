import { useState } from 'react'
import './App.css'
 import Tarjeta from './Components/Tarjeta'
import Form from './Components/Form'

function App() {

  
  const [estilos, setEstilos] = useState({
    background: 'red',
    color: 'white'
  })

  
  

  return (
    <>
      <h1>Autos Clasicos</h1>
      
      <Form setEstilos={setEstilos} estilos={estilos}/>
      {/* <Tarjeta f={f} estilos={estilos}/> */}

      
    </>
  )
}

export default App
