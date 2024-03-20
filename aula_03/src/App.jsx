import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno'

const App = () => {
  return (
    //<div><EstouConseguindoAprenderReact estouConseguindo = {false}/></div>
    <div><EstouConseguindoAprenderReact estouConseguindo = {false}/>{
      [
      {nome: "João", email: "joão@gmail.com", curso: "Sistemas para internet", media: 7},
      {nome: "Maria", email: "maria@gmail.com", curso: "Sistemas ", media: 8},
      {nome: "Jose", email: "jose@gmail.com", curso: "Sistemas da informação", media: 5}
      ].map((aluno) => <Aluno nome = {aluno.nome} email = {aluno.email} curso = {aluno.curso} media = {aluno.media}/>)
    }</div>
    
  )
}

export default App