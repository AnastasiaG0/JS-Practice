/*Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список.
В качестве аргументов функция должна принимать два массива: массив строк с исходными email-адресами и массив строк с email-адресами в чёрном списке.*/

function filter(list, black_list) {
    let white_list = []

    for (let email of list) {
        let bool = true
        for (let black_email of black_list) {
            if (email == black_email) {
                bool = false
            }
        }

        if (bool === true) {
            white_list.push(email)
        }
    }

    return white_list
}

let email = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
let black_email = ['jsfunc@mail.ru','goodday@day.ru']
let white_email = []

white_email = filter(email, black_email)

console.log(white_email)

//node Practice5_8_2.js