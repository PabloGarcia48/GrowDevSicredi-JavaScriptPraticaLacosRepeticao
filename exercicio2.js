/*
Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.
*/
document.write(`<br>Exercício 2.<br>`)

let alturaPedro = 1.50
let taxaCrescPedro = 0.02
let alturaLucas = 1.10
let taxaCrescLucas = 0.03
let anos = 0

while (alturaPedro > alturaLucas) {
    alturaPedro += taxaCrescPedro
    alturaLucas += taxaCrescLucas
    anos += 1
}

document.write(`a. Pedro e Lucas terão a mesma altura em: ${anos} anos.<br>`)
document.write(`b. Lucas ultrapassará Pedro em: ${anos + 1} anos.<br>`)
document.write(`Pedro e Lucas terão ${alturaPedro.toFixed(2)} metros, quando suas alturas forem iguais.<br>`)