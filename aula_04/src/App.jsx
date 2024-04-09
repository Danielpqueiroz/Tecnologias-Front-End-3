import React from 'react'
import Exercicio1 from './components/Exercicio1'
import Exercicio2 from './components/Exercicio2'
import Campanha from './components/Campanha'
import FormularioDeContato from './components/FormularioDeContato'

const App = () => {
  return (
    <div>
      <Exercicio1/>
      <Exercicio2/>
      <Campanha mes="Outubro"/>
      <FormularioDeContato />
    </div>
  )
}

export default App