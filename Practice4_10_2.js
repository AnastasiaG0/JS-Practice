/*Создайте с помощью цикла for массив упорядоченных чисел с количеством чисел, равным count.
С помощью второго цикла перемешайте этот массив. 
Выведите получившийся результат на экран с помощью console.log.*/

let count = 7
let n = 1
let arr = []

for (let i = 0; i < count; ++i) {
    arr.push(n)
    ++n
}

console.log(`Изначальный массив ${arr}`)

for (let k = 0; k < count; ++k) {
    let j = Math.round(Math.random() * (arr.length - 1))
    let auxiliary = arr[j]
    arr[j] = arr[k]
    arr[k] = auxiliary
}

console.log(`Перемешанный массив ${arr}`)

//node Practice4_10_2.js