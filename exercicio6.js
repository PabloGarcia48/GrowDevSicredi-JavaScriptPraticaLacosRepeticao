/*
6. Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
*/

document.write(`<br>Exercício 6.<br>`)

for (let i = 30; i >= 1; i--) {
  let prime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }

  if (prime) {
    document.write(`[${i}] ,`);
  } else {
    document.write(i + ",");
  }
}