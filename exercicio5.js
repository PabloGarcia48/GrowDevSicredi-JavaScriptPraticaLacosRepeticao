/*
5. Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:
*/
document.write(`<br>Exercício 5.<br>`)

const numContagem = Number(prompt(`Digite um valor para mostrar a sua sequência`));

for (let i = 0; i <= numContagem; i++) {
    mensagem =+ i + ", ";
    document.write(mensagem);
}

document.write("Fim!");