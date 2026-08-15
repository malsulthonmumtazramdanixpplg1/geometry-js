const prompt = require("prompt-sync") ({ sigint: true})
console.log("========================")
console.log("KALKULATOR JAJAR GENJANG")
console.log("========================")
let a = Number(prompt("Alas : "))
let t = Number(prompt("TInggi : "))
let b = Number(prompt("Panjang sisi miring : "))
let luas = a * t
let keliling = 2 * (a + b)
console.log (`
    luas = ${luas} cm2
    Keliling = ${keliling} cm`)