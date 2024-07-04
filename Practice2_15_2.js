/*Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.*/

let a = 13.890123
let b = 2.891564
let n = 2

let remainderA = Math.floor(a % 1 * Math.pow(10, n) / 1)
let remainderB = Math.floor(b % 1 * Math.pow(10, n) / 1)

console.log(remainderA)
console.log(remainderB)

console.log("остатки чисел равны", remainderA === remainderB)
console.log("остатки чисел не равны", remainderA !== remainderB)
console.log("остаток числа a <= остатка числа b", remainderA <= remainderB)
console.log("остаток числа a >= остатка числа b", remainderA >= remainderB)
console.log("остаток числа a < остатка числа b", remainderA < remainderB)
console.log("остаток числа a > остатка числа b", remainderA > remainderB)

//node Practice2_15_2.js