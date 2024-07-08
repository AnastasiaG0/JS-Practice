/*Дан массив: [31, 10, 'chicken', 9, 'fish', 10]
Как отфильтровать исходный массив так, чтобы получить массив, где будут только строки?
Как отфильтровать исходный массив так, чтобы получить массив, где будут только элементы со значением 10?*/

let arr = [31, 10, 'chicken', 9, 'fish', 10]
let str_elements = []
let elements_meaning = []

console.log("1 способ")
for (let index = 0; index < arr.length; ++index) {
    if (typeof arr[index] === "string") {
        str_elements.push(arr[index])
    }
    else if (arr[index] === 10) {
        elements_meaning.push(arr[index])
    }
}
console.log(`Исходный массив: ${arr}`)
console.log(`Полученный массив из строк: ${str_elements}`)
console.log(`Полученный массив из элементов со значением 10: ${elements_meaning}\n`)


console.log("2 способ")
console.log(`Исходный массив: ${arr}`)
console.log(`Полученный массив из строк: ${arr.filter(element => typeof element === "string")}`)
console.log(`Полученный массив из элементов со значением 10: ${arr.filter(element => element === 10)}\n`)


str_elements = []
elements_meaning = []
console.log("3 способ")
arr.forEach(element => {
    if (typeof element === "string") {
        str_elements.push(element)
    }
    else if (element === 10) {
        elements_meaning.push(element)
    }
})
console.log(`Исходный массив: ${arr}`)
console.log(`Полученный массив из строк: ${str_elements}`)
console.log(`Полученный массив из элементов со значением 10: ${elements_meaning}\n`)



//node Array_filtering.js