/*Дан массив элементов: [cat, dog, parrot, horse]
Как узнать индекс элемента parrot?
Приветствуется решение несколькими способами*/

let arr = ["cat", "dog", "parrot", "horse"]
let index = -1

console.log("1 способ")
console.log(`Массив элементов: ${arr}`)
console.log(`Индекс элемента "parrot": ${arr.indexOf("parrot")}\n`)


index = -1
console.log("2 способ")
for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === "parrot") {
        index = i
        break
    }
}
console.log(`Массив элементов: ${arr}`)
console.log(`Индекс элемента "parrot": ${index}\n`)


index = -1
console.log("3 способ")
console.log(`Массив элементов: ${arr}`)
console.log(`Индекс элемента "parrot": ${arr.findIndex(animal => animal === "parrot")}\n`)


index = -1
console.log("4 способ")
for (let animal of arr) {
    ++index
    if (animal === "parrot") {
        break
    }
}
console.log(`Массив элементов: ${arr}`)
console.log(`Индекс элемента "parrot": ${index}\n`)


index = -1
console.log("5 способ")
let p = 0
arr.forEach (animal => {
    if (animal === "parrot") {
        index = p
    }
    ++p
})
console.log(`Массив элементов: ${arr}`)
console.log(`Индекс элемента "parrot": ${index}\n`)



//node Searching_array_element.js