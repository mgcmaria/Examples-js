const PI = 3.14159

let myAge = 32
let myName = "Gladiador"

console.log(typeof 32) // number

// Array
const elements = [ 45, "Tomate", true ]
console.log(elements[1])

// Object
const hero = {
    name: "Capitán Sevilla",
    year: 1983,
    superpower: "Cantar flamenco"
}

console.log(hero.year)

hero.year = 1981

console.log(hero.year)


function primeraLetra(palabra) {

    return palabra.substr(0, 1)
}

// 2 pasos
/*
let resultado = primeraLetra("bocadillo")
console.log(resultado)
*/

// 1 paso
console.log(primeraLetra("bocadillo"))







const fruits = ["Apple", "Tomato", "Strawberry"]
const bittedFruits = fruits.map(fruit => fruit.substr(1, fruit.length-2))

/*
// Old function notation
function (palabra) {
    return palabra.substr(0, 1)
}
// Modern function notation
palabra => palabra.substr(0, 1)
*/

function sayHelloAndFirstLetter(palabra) {
    console.log("Hola")
    return palabra.substr(0, 1)
}

const sayHelloAndFirstLetter = palabra => {
    console.log("Hola")
    return palabra.substr(0, 1)
}

sayHelloAndFirstLetter("jamon")

function sumar(a, b) {
    return a + b
}

console.log(sumar(3, 9)) // 12
