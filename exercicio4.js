/*
4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.
*/
document.write(`<br>Exercício 4.<br><br>`)

let multiplo3 = ""
let multiplo5 = ""

for (let i = 0; i < 250; i++) {
    if (i % 3 == 0) {
        multiplo3 += i + ", "
    }
    if (i % 5 == 0) {
        multiplo5 += i + ", "
    }
}

document.write(`Divisíveis por 3:<br> ${multiplo3}<br><br>`)
document.write(`Divisíveis por 5:<br> ${multiplo5}<br>`)
