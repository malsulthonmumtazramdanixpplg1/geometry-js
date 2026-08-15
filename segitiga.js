const prompt = require("prompt-sync") ({ sigint: true})
console.log("=================")
console.log("KELILING SEGITIGA")
console.log("=================")
let a = Number(prompt("Alas : "))
let t = Number(prompt("Tinggi : "))
let s1 = Number(prompt("Sisi 1 : "))
let s2 = Number(prompt("Sisi 2 : "))
let s3 = Number(prompt("Sisi 3 : "))
let luas = 1/2 * a * t
let keliling = s1 + s2 + s3
console.log(`
luas = ${luas} cm2
keliling = ${keliling} cm`)