import React, { useState } from 'react'

const FormularioDeContato = () => {

    const [nome, setNome] = useState()
    const [contato, setContador] = useState()
    const [mensagem, setMensagem] = useState()
    const handleSubmit = (event) => {
        event.preventDefault();
    
    
        const objetoLiteral = {
          nome: nome,
          contato: contato,
          mensagem: mensagem
        };
    
        const jsonToSend = JSON.stringify(objetoLiteral);
    
        console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`);
      };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label><br />
        <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
        /><br />
        <label htmlFor="contato">Contato:</label><br />
        <input
            type="text"
            id="contato"
            name="contato"
            value={contato}
            onChange={(event) => setContato(event.target.value)}
        /><br />
        <label htmlFor="mensagem">Mensagem:</label><br />
        <textarea
            id="mensagem"
            name="mensagem"
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
        ></textarea><br />
        <button type="submit">Enviar</button>
    </form>
  )
}

export default FormularioDeContato