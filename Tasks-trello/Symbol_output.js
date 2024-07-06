/*Дана строка: Я изучаю JavaScript
Как вывести 3-й символ? 1-й? Последний?
Приветствуется решение несколькими способами*/

let str = "Я изучаю JavaScript"

console.log("1 способ")
console.log(`3-й символ: ${str[2]}
1-й символ: ${str[0]}
Последний символ: ${str[str.length - 1]}\n`)

console.log("2 способ")
console.log(`3-й символ: ${str.slice(2, 3)}
1-й символ: ${str.slice(0, 1)}
Последний символ: ${str.slice(-1)}\n`)

console.log("3 способ")
console.log(`3-й символ: ${str.substring(2, 3)}
1-й символ: ${str.substring(0, 1)}
Последний символ: ${str.substring(str.length - 1)}\n`)

console.log("4 способ")
console.log(`3-й символ: ${str.substr(2, 1)}
1-й символ: ${str.substr(0, 1)}
Последний символ: ${str.substr(-1)}\n`)

console.log("5 способ")
let [first_symbol,, third_symbol,,,,,,,,,,,,,,,, last_symbol] = str
console.log(`3-й символ: ${third_symbol}
1-й символ: ${first_symbol}
Последний символ: ${last_symbol}\n`)

console.log("6 способ")
let arr = str.split("")
for (let i = 0; i < str.length; ++i) {
    if (i = 2) {
        console.log(`3-й символ: ${arr[i]}`)
        i -= 2
        console.log(`1-й символ: ${arr[i]}`)
    }
    if (i = str.length - 1) {
        console.log(`Последний символ: ${arr[i]}`)
    }
}


//node Symbol_output.js