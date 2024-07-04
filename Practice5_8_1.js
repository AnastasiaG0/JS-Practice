/*Создайте функцию с названием getAge(), которая будет рассчитывать возраст по году рождения.
У функции будет всего один аргумент (параметр), который нужно передать в функцию.
Функция должна сделать расчёт возраста по текущему году.
После расчёта функция должна вернуть результат с помощью команды return.
Созданную функцию нужно вызвать, передав ей дату рождения.
Результат, который вернёт функция, необходимо вывести в консоль.*/

function getAge(year) {
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    console.log(currentYear)
    return currentYear - year
}

let userYear = 1991

console.log(getAge(userYear))

//node Practice5_8_1.js