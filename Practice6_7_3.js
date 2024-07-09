/*Напишите функцию filter(), фильтрующую массив объектов по значению свойства.
Массив, название свойства и нужное значение должны передаваться в качестве аргументов.*/

function filter(arr, property, meaning) {
    let suitable_person = []
    
    for (let index = 0; index < arr.length; ++index) {
        let person = Object.entries(arr[index])

        let person_name = person[0]
        let person_surname = person[1]

        let key = person_name[0]
        let value = person_name[1]
        
        if(key === property && value === meaning) {
            suitable_person.push(arr[index])
        }
    }
    return suitable_person
}

let users = [
    {name: 'Василий', surname: 'Васильев'},
    {name: 'Иван', surname: 'Иванов'},
    {name: 'Пётр', surname: 'Петров'}
]
console.log(filter(users, 'name', 'Иван'))


//node Practice6_7_3.js