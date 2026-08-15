const prompt = require("prompt-sync") ({ sigint: true})
console.log("========================")
console.log("KALKULATOR LAYANG-LAYANG")
console.log("========================")
let d1 = Number (prompt("Panjang Diagonal 1 :"))
let d2 = Number (prompt("Panjang Diagonal 2 :"))
let s = Number (prompt("Salah satu sisi :"))
let a = Number (prompt("Panjang sisi pendek :"))
let b = Number (prompt("Panjang  sisi panjang :"))
let luas = d1 * d2 /2
let keliling = 2 * (a + b)
console.log (`
    luas = ${luas } cm2
    keliling = ${keliling} cm`)