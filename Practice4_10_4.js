/*Даны два массива:
arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53]
arr2 = [12, 44, 23, 5]
Напишите программу, которая будет объединять два массива: arr1 и arr2.
Результат объединения нужно вывести в консоль с помощью команды console.log в таком виде:
[2, 2, 17, 21, 45, 12, 54, 31, 53, 12, 44, 23, 5]
Важно: для выполнения этого задания можно использовать только один цикл. 
Программа должна корректно работать с массивами любой длины.
Нельзя переприсвоить массивы целиком друг в друга*/

let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53]
let arr2 = [12, 44, 23, 5]
let arr = []

let i = 0
while (i < arr1.length + arr2.length) {
    if (i < arr1.length) {
        arr.push(arr1[i])
    }

    else if (i - arr1.length < arr2.length) {
        arr.push(arr2[i - arr1.length])
    }

    else {
        break
    }

    ++i
}

console.log(arr)

//node Practice4_10_4.js