/*Напишите функцию getOlderUserArray(), в которую будете передавать массив объектов с пользователями.
Функция должна вернуть имя старшего пользователя.*/

function getOlderUserArray(allUsers) {
    let max_age = -1
    for (user of allUsers) {
        max_age = Math.max(max_age, user.age)
    }
    for (user of allUsers) {
        if (user.age == max_age) {
            return user.name
        }
    }
}

let allUsers = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

console.log(getOlderUserArray(allUsers))

//node Practice6_7_2.js