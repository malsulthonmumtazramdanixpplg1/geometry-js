const prompt = require("prompt-sync") ({ sigint: true})
console.log("====================")
console.log("KALKULATOR LINGKARAN")
console.log("====================")
let r = Number(prompt("Jari-jari : "))
let d = Number(prompt("Diameter : "))
let phi = Number(prompt("Phi : "))
let luas = phi * r * r 
let keliling = 2 * phi * r
console.log(`
    luas = ${luas} cm2
    keliling = ${keliling} cm`)