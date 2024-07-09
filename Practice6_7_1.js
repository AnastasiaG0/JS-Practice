/*Создайте функцию с названием getOlderUser(), которая будет определять, кто из двух пользователей старше.
Аргументами функции являются два пользователя в виде двух объектов.
Функция должна вернуть с помощью команды return имя старшего пользователя.
Созданную функцию нужно вызвать, передав ей два объекта: user1 и user2.
Результат, который вернёт функция, необходимо вывести в консоль.*/ 

function getOlderUser(user1, user2) {
    if (user1.age > user2.age) {
        return user1.name
    }
    else if (user1.age == user2.age) {
        let arr = []
        arr.push(user1.name)
        arr.push(user2.name)
        return arr.join(", ")
    }
    else {
        return user2.name
    }
}

let user1 = {
    name: 'Игорь',
    age: 17
}

let user2 = {
    name: 'Оля',
    age: 21
}

console.log(getOlderUser(user1, user2))

//node Practice6_7_1.js