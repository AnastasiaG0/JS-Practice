/*Напишите генератор двух случайных чисел в диапазоне между n и m включительно.
Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
Выведите два произвольных числа в консоль с помощью console.log.
Сравните два полученных числа. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.*/

let n = 100
let m = -5

let difference = Math.abs(n - m)

console.log(Math.round(Math.random() * difference) + Math.min(n, m))
console.log(Math.round(Math.random() * difference) + Math.min(n, m))

//node Practice2_15_3.js