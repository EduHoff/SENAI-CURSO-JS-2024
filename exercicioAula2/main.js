//1-Crie uma variável para armazenar seu nome e outra para armazenar sua idade.

let meuNome = "Eduardo"
let minhaIdade = 18

console.log(meuNome, minhaIdade)

//2-Crie uma variável booleana para indicar se você gosta de JavaScript.

let GostarJS = false

//3-Crie uma variável null e uma undefined.
let varNull = null
let varUndefined = undefined

console.log(varNull, varUndefined)

//4-Crie um objeto para representar um carro, com as propriedades modelo, ano e cor.

carro = {
    modelo: "Clio",
    ano: 2000,
    cor: "Vermelho"
}
console.log(carro)

//5-Crie um array para armazener os nomes de suas frutas favoritas.

frutasLegais = ["maça", "banana", "abacaxi"]
console.log(frutasLegais)

//6-Crie uma função que receba seu nome como parâmetro e retorne uma saudação.

function saudacao(nome){
    console.log("Olá, " + nome + "!")
}

saudacao("Eduardo")

//7-Crie uma função que receba dois números como parâmetro e retorne a soma deles.

function soma(num1, num2){
    return num1 + num2
}

console.log("Soma: " + soma(2, 3))

//8-Crie uma condição que verifique se uma pessoa é maior de idade.

function verificarIdade(idade){
    if(idade >= 18){
        console.log("Maior de idade!")
    }else{
        console.log("Menor de idade!")
    }
}

verificarIdade(18)

//9-Crie um loop que imprima os números de 1 a 10.

for(let i=1; i<=10; i++){
    console.log(i + " de 10")
}

//10-Crie um programa que converta temperatura de Celsius para Fahrenheit.

function celsiusParaFahrenheit(celsius){
    return celsius*(9/5) + 32
}

function celsiusParaFahrenheit(celsius){
    return celsius*(9/5) + 32
}

function fahrenheitParaCelsius(fahrenheit){
    return (fahrenheit-32)*(5/9)
}

console.log(celsiusParaFahrenheit(20))

console.log(fahrenheitParaCelsius(68))