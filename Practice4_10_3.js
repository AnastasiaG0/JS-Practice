/*С помощью цикла найдите индекс (порядковый номер) элемента массива из предыдущего задания с числом n.
Если такой элемент не будет найден, то выведите соответствующее сообщение на экран.*/

let count = 7
let p = 1
let arr = []

for (let i = 0; i < count; ++i) {
    arr.push(p)
    ++p
}

console.log(`Изначальный массив ${arr}`)

for (let k = 0; k < count; ++k) {
    let j = Math.round(Math.random() * (arr.length - 1))
    let auxiliary = arr[j]
    arr[j] = arr[k]
    arr[k] = auxiliary
}

console.log(`Перемешанный массив ${arr}`)



let n = 5
let bool = false

for (let number = 0; number < count; ++number) {
    if (arr[number] === n){
        bool = true
        console.log(`Порядковый номер элемента "${n}" = ${number + 1}`)
        break
    }
}

if (bool === false) {
    console.log(`Элемент "${n}" не найден`)
}

//node Practice4_10_3.js