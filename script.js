/*
   Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

      - [ ]  A soma dos dois números;
      - [ ]  A subtração dos dois números;
      - [ ]  A multiplicação dos dois números;
      - [ ]  A divisão dos dois números;
      - [ ]  O resto da divisão dos dois números;

   Fácil até aqui, né? Bora se desafiar?

      - [ ]  Verifique se a soma dos dois números é par ou ímpar
      - [ ]  Verifique se os dois números inseridos são iguais ou diferentes

   Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

const numberOne = Number(prompt("Digite o primeiro número:"))
const numberTwo = Number(prompt("Digite o segundo número:"))

const mathematicalOperator = {
   "Soma": () => numberOne + numberTwo,
   "Subtração": () => numberOne - numberTwo,
   "Multiplicação": () => numberOne * numberTwo,
   "Divisão": () => numberOne / numberTwo,
   "Resto de divisão": () => numberOne % numberTwo,
}

for (const operator in mathematicalOperator) {
   alert(`${operator} dos dois números é: ${mathematicalOperator[operator]()}`)
}

const isEven = (numberOne + numberTwo) % 2 == 0
const isEqual = numberOne === numberTwo

if (isEven) {
   alert("A soma dos dois números é par")
} else {
   alert("A soma dos dois números é impar")
}

if (isEqual) {
   alert("Os dois números inseridos são iguais")
} else {
   alert("Os dois números inseridos não são iguais")
}