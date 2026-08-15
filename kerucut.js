const prompt = require("prompt-sync") ({ sigint: true})
console.log("==================")
console.log("KALKULATOR KERUCUT")
console.log("==================")
let phi = Number(prompt("Phi : "))
let r = Number(prompt("Jari-jari : "))
let s = Number(prompt("Sisi : "))
let luas = phi * r * r
let keliling = phi * r * s
console.log (`
    luas = ${luas } cm2
    keliling = ${keliling} cm`)