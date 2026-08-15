const prompt = require("prompt-sync") ({ sigint: true})
console.log("===============")
console.log("KALKULATOR BOLA")
console.log("===============")
let phi = Number(prompt("Phi : "))
let r = Number(prompt("Jari-jari : "))
let luas = 4 * phi * r * r
let keliling = 2 * phi * r
console.log (`
    luas = ${luas } cm2
    keliling = ${keliling} cm`)