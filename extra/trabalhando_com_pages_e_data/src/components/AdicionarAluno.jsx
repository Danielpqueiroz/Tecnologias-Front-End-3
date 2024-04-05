import React from 'react'
import axios from 'axios'

const AdicionarAluno = () => {

  const addAluno = async () => {
    const response = await axios.post('http://localhost:3000/alunos',
    {
      nome: "Daniel",
      email: "daniel@gmail.com"
    }
    );
    console.log(`Foi adicionado o aluno: ${response.data}`)
    alert("Aluno cadastrado com sucesso");
  } 

  return (
    <div>
      <button onClick={addAluno}>Adicionar Daniel</button>
    </div>
  )
}

export default AdicionarAluno