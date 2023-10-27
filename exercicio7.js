/*
7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.
*/

document.write(`<br>Exercício 7.<br>`)
let positiveNumber = 0
let negativeNumber = 0
let sumNumbers = 0


for (let i = 0; i < 10; i++) {
    let numberIn = Number(prompt("Digite um valor, negativo ou positivo"));
    if (numberIn > 0) {
        positiveNumber++
        sumNumbers = sumNumbers + numberIn
    } else if (numberIn < 0) {
        negativeNumber++
        sumNumbers = sumNumbers + numberIn
    } else {
        alert("Número inválido")
    }
}

let validNumbers = positiveNumber + negativeNumber
let average = sumNumbers / validNumbers

document.write(`A média dos números é: ${average.toFixed(2)}<br>`)
document.write(`O total de números positivos digitados é: ${positiveNumber}<br>`)
document.write(`E seu percentual é: ${((positiveNumber / validNumbers) * 100).toFixed(0)}%<br>`)
document.write(`O total de números negativos digitados é: ${negativeNumber}<br>`)
document.write(`E seu percentual é: ${((negativeNumber / validNumbers) * 100).toFixed(0)}%<br>`)
