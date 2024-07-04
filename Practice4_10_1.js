/*Напишите генератор массивов длиной count со случайными числами от n до m.
Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m. 
Выведите результат с помощью console.log.*/

let n = -3
let m = -10
let count = 42
let arr1 = []
let arr2 = []

let difference = Math.abs(n - m)

for (let i = 0; i < count; ++i) {
    arr1[i] = Math.round(Math.random() * difference) + Math.min(n, m)
    arr2[i] = Math.round(Math.random() * difference) + Math.min(n, m)
}

console.log(arr1, arr2)

//node Practice4_10_1.js