const prompt = require("prompt-sync") ({ sigint: true})
console.log("========================")
console.log("KALKULATOR BELAH KETUPAT")
console.log("========================")
let d1 = Number (prompt("Panjang Diagonal 1 :"))
let d2 = Number (prompt("Panjang Diagonal 2 :"))
let s = Number (prompt("Salah satu sisi :"))
let luas = d1 * d2 /2 
let keliling = 4 * s
console.log (`
    luas = ${luas } cm2
    keliling = ${keliling} cm`)