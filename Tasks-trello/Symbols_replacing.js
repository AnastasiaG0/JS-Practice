/*Можем ли мы заменить в строке: Я изучаю JavaScript
символ ю на другой? Если да, то как?
Можем ли заменить слово JavaScript на 'Frontend`?
Приветствуется решение несколькими способами*/

let str = "Я изучаю JavaScript"
let str_Frontend = "Frontend"
let new_symbol = "л"
let space = " "
let new_str = ""

console.log("1 способ")
new_str = str.slice(0, 7) + new_symbol + " " + str_Frontend
console.log(`Исходная строка: ${str}`)
console.log(`Полученная строка: ${new_str}\n`)


new_str = ""
console.log("2 способ")
let arr = str.split("")
for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == "ю") {
        arr[i] = new_symbol
    }
    else if (arr[i] == "J" && arr[i + 1] == "a" && arr[i + 2] == "v" && arr[i + 3] == "a" && arr[i + 4] == "S"
        && arr[i + 5] == "c" && arr[i + 6] == "r" && arr[i + 7] == "i" && arr[i + 8] == "p" && arr[i + 9] == "t") {
        for (let j = 0; j < str_Frontend.length; ++j) {
            arr[i + j] = str_Frontend[j]
        }
    }
}
let length_difference = Math.abs(str.slice(9).length - str_Frontend.length)
for (let k = 1; k <= length_difference; ++k) {
    arr.pop()
}
for (let p = 0; p < arr.length; ++p) {
    new_str += arr[p]
}
console.log(`Исходная строка: ${str}`)
console.log(`Полученная строка: ${new_str}\n`)


new_str = ""
console.log("3 способ")
new_str = new_str.concat(str.slice(0, 7), new_symbol, space, str_Frontend)
console.log(`Исходная строка: ${str}`)
console.log(`Полученная строка: ${new_str}\n`)


new_str = ""
console.log("4 способ")
let arr_symbols = str.slice(0, 7).split("")
arr_symbols.push(new_symbol.split(""))
arr_symbols.push(space.split(""))
arr_symbols.push(str_Frontend.split(""))
for (let p = 0; p < arr.length; ++p) {
    new_str += arr[p]
}
console.log(`Исходная строка: ${str}`)
console.log(`Полученная строка: ${new_str}\n`)



//node Symbols_replacing.js