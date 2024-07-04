/*Создайте функцию arrSort(), аргументом (параметром) которой будет массив.
Задача функции — сделать сортировку элементов переданного массива по возрастанию.
Функция должна вернуть отсортированный массив, а результат выполнения функции должен быть выведен в консоль с помощью console.log.*/

function arrSort(arr) {
    for (let count = 0; count < arr.length; count++) {
        for (let index = 0; index < arr.length - 1; index++) {
            if (arr[index] > arr[index + 1]) {
                let temp = arr[index + 1]
                arr[index + 1] = arr[index]
                arr[index] = temp
            }
        }
    }

    return arr
}

let initial_arr = [12,33,3,44,100]

console.log(arrSort(initial_arr))

//node Practice5_8_3.js