import React from 'react'
import HookMegaSena from './components/HookMegaSena'
import Aluno from './components/Aluno'
import ExCss from './components/ExCss'
import Sozinho01 from './components/Sozinho01'


const App = () => {

  const aluno01 = {
    nome: "João",
    email: "joao@gmail.com",
    curso: "Sitemas para Internet"
  }

  const aluno02 = {
      nome: "Maria",
      email: "maria@gmail.com",
      curso: "curso"
  }

  const alunos = [aluno01, aluno02];

  return (
    <div>
      {
        alunos.map((aluno) => (
          <Aluno nome = {aluno.nome} email = {aluno.email} curso = {aluno.curso} ExCss />
          
          
        ))
      }
      <ExCss/>
      <Sozinho01/>
    </div>
  )
}

export default App