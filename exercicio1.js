/*
1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;
*/


document.write(`<br>Exercício 1.<br>`)

let taller = -Infinity
let lowestHeight = Infinity

for (let i = 0; i <= 14; i++) {
    const stature = Number(prompt("Digite a altura"))
    if (stature > taller) {
        taller = stature
    }
    if (stature < lowestHeight) {
        lowestHeight = stature
    }
}

document.write(`A maior altura é ${taller}`)
document.write(`<br>`)
document.write(`A menor altura é ${lowestHeight}`)
