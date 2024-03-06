let numeros = [1, 2, 3, 4, 5, 6]

function dobrandoNumeros(lista){
    let numerosDobrados = lista.map(numero => numero*2);
    return numerosDobrados;
}

let numerosDobrados = dobrandoNumeros(numeros);

console.log(numerosDobrados);


