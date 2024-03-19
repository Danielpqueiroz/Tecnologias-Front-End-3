import React, { useState } from 'react';

const HookMegaSena = () => {
    const [numeroSorteado, setNumeroSorteado] = useState(null);
    const [numerosSorteados, setNumerosSorteados] = useState([]);

    const sortearNumero = () => {
        if (numerosSorteados.length === 6) {
            alert("Já temos 6 números sorteados");
        } else {
            const novoNumero = Math.floor(Math.random() * 60) + 1;
            setNumeroSorteado(novoNumero);
            setNumerosSorteados([...numerosSorteados, novoNumero]);
        }
    };

    return (
        <div>
            <h1>Sorteador da mega em React! :)</h1>
            <button onClick={sortearNumero}>Sortear Número</button>
            <h2>Último Número sorteado: {numeroSorteado}</h2>
            <h3>Números sorteados: {numerosSorteados.join(' - ')}</h3>
            
        </div>
    );
};

export default HookMegaSena;
