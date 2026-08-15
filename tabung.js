const prompt = require("prompt-sync") ({ sigint: true})
console.log("=================")
console.log("KALKULATOR TABUNG")
console.log("=================")
let phi = Number(prompt("Phi : "))
let r = Number(prompt("Jari-jari : "))
let t = Number(prompt("Tinggi : "))
let luas = phi * r * r
let keliling = 2 * phi * r * t
console.log (`
    luas = ${luas } cm2
    keliling = ${keliling} cm`)