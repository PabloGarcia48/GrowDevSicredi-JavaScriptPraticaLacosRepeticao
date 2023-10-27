/*
3. Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
*/
document.write(`<br>Exercício 3.<br>`)

const numbIn = Number(prompt("Digite um número para ver a sua tabuada(multiplicando)"))
let multiply = Number(prompt("Digite um número de iterações"))

for (let i = 0; i <= multiply; i++) {
    let result = numbIn * i
    document.write(`${numbIn} * ${i} = ${result}<br>`)
}