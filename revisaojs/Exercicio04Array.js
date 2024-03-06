const notas = [8, 9, 10];
let soma = 0;

console.log("A Primeira nota do aluno é " + (notas[0]) + ".")
console.log("A Segunda nota do aluno é " + (notas[1]) + ".")
console.log("A Terceira nota do aluno é " + (notas[2]) + ".")

for (let i in notas){
    soma += notas[i];
}

let media = soma/notas.length;
console.log("A media do aluno é: " + media);
