/*В переменных userName, userSurname даны имя и фамилия пользователя.
При этом в строках беспорядок с большими и маленькими буквами, и нужно оформить строки единообразно.
Для этого первые буквы имени и фамилии приведите к верхнему регистру (большие буквы), а оставшиеся — к нижнему (маленькие буквы).
Запишите результат в новые переменные и выведите их значения с помощью console.log.
С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений»
для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.*/

let userName = "нАстЯ"
let userSurname = "ГУммЕлЬ"
let Name = ""
let Surname = ""

for (let i = 0; i <= userName.length; ++i) {
    let sumbolN = userName.substring(i, i + 1)
    Name += (i === 0) ? sumbolN.toUpperCase() : sumbolN.toLowerCase()
}

for (let n = 0; n <= userSurname.length; ++n) {
    let sumbolS = userSurname.substring(n, n + 1)
    Surname += (n === 0) ? sumbolS.toUpperCase() : sumbolS.toLowerCase()
}

console.log(`${Name} ${Surname}`)

console.log((Name === userName) ? "Имя осталось без изменений" : "Имя было преобразовано")
console.log((Surname === userSurname) ? "Фамилия осталась без изменений" : "Фамилия была преобразована")


//node Practice3_15_2.js