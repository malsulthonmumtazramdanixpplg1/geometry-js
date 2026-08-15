const prompt = require("prompt-sync") ({ sigint: true})
console.log("=========================")
console.log("KALKULATOR PERSGI PANJANG")
console.log("=========================")
let p = Number (prompt ('Panjang : '))
let l = Number (prompt ('Lebar : '))
let luas = p * l
let keliling = 2 * (p *l)
console.log (`
luas =  ${luas} cm2
keliling =  ${keliling} cm`)