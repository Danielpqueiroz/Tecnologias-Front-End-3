import React, { useState } from 'react'

const HookContador = () => {
    const [contador, setContador] = useState(1);

    const incrementarContador = () => {
        setContador(prevContador => prevContador + 1)
    };

  return (
    <div>
        <h2>Contador com useState.</h2>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <h2>Contador está em: {contador}.</h2>
    </div>
  )
}

export default HookContador