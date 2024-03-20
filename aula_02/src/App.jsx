import React from 'react'
import Exercicio1Adicao from './components/Exercicio1Adicao'
import Exercicio1Subtracao from './components/Exercicio1Subtracao'
import Exercicio1Multiplicacao from './components/Exercicio1Multiplicacao'
import Exercicio1Divicao from './components/Exercicio1Divicao'

const App = () => {
  return (
    <div>
      <Exercicio1Adicao num1={2} num2={3}/>
      <Exercicio1Subtracao num1={12} num2={3}/>
      <Exercicio1Multiplicacao num1={2} num2={3}/>
      <Exercicio1Divicao num1={15} num2={3}/>
    </div>
  )
}

export default App
