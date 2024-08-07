//slice
    /*Он возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end).
    start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.
    Можно вызвать slice без аргументов: arr.slice() создаёт копию arr.*/
    let symbols = ["t", "e", "s", "t"];

    console.log(symbols.slice(1, 3)); // [ 'e', 's' ] (копирует с 1 до 3)

    console.log(symbols.slice(-2)); // [ 's', 't' ] (копирует с -2 до конца)


//splice   может добавлять, удалять и заменять элементы массива
    //удаление элемента
    let arr_str1 = ["Я", "изучаю", "JavaScript"];

    arr_str1.splice(1, 1); // начиная с индекса 1, удалить 1 элемент

    console.log(arr_str1); // ["Я", "JavaScript"]

    //замена элементов
    let arr_str2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

    arr_str2.splice(0, 3, "Давай", "танцевать"); // удалить 3 первых элемента и заменить их другими
    
    console.log(arr_str2) // ["Давай", "танцевать", "прямо", "сейчас"]

    //возврат массива, состоящего из удалённых элементов
    let arr_str3 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

    let removed = arr_str3.splice(0, 2); // удалить 2 первых элемента
    
    console.log(removed); // [ 'Я', 'изучаю' ]

    //вставка элементов без удаления
    let arr_str4 = ["Я", "изучаю", "JavaScript"];

    arr_str4.splice(2, 0, "сложный", "язык"); // начиная с индекса 2 удалить 0 элементов и вставить "сложный", "язык"

    console.log(arr_str4); // [ 'Я', 'изучаю', 'сложный', 'язык', 'JavaScript' ]


//map   вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
    let characters = ["Бильбо", "Гэндальф", "Назгул"]
    let lengths = characters.map(item => item.length);
    console.log(lengths); // [ 6, 8, 6 ]


//for



//forEach   позволяет запускать функцию для каждого элемента массива.
    //вывод каждого элемента массива на экран
    let names = ["Бильбо", "Гэндальф", "Назгул"]
    names.forEach(function (name) {
        return console.log(name)
    });                 /*Бильбо
                        Гэндальф
                        Назгул*/

    //вывод каждого элемента массива и его индекса на экран
    names.forEach((item, index, array) => {
        console.log(`У ${item} индекс ${index} в ${array}`);
    });                 /*У Бильбо индекс 0 в Бильбо,Гэндальф,Назгул
                        У Гэндальф индекс 1 в Бильбо,Гэндальф,Назгул
                        У Назгул индекс 2 в Бильбо,Гэндальф,Назгул*/





//filter   ищет элемент, который заставит функцию вернуть true и возвращает массив из всех подходящих элементов
   /*Если `true`, то элемент добавляется к массиву из всех подходящих элементов и перебор продолжается
   Возвращается пустой массив в случае, если ничего не найдено*/
    let laptop_users = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 3, name: "Маша"}
    ];
    
    // возвращает массив, состоящий из двух первых пользователей
    let some_laptop_users = laptop_users.filter(item => item.id < 3);
    
    console.log(some_laptop_users); // [ { id: 1, name: 'Вася' }, { id: 2, name: 'Петя' } ]
    console.log(some_laptop_users.length); // 2


//reduce   используется для вычисления единого значения на основе всего массива.
    /*При вызове функции результат её предыдущего вызова передаётся на следующий вызов в качестве первого аргумента.*/
    //вычисление суммы всех элементов массива
    let numbers_for_summ = [1, 2, 3, 4, 5];

    let result = numbers_for_summ.reduce((sum, current) => sum + current, 0); // 0 - начальное значение суммы

    console.log(result); // 15


//sort   сортирует массив, меняя в нём порядок элементов и возвращает отсортированный массив
   /*По умолчанию элементы сортируются как строки. "2" > "15"
   Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента*/
    let arr = [ 1, 2, 15 ];

    arr.sort();

    console.log(arr);  // [ 1, 15, 2 ]

    function compareNumeric(a, b) {
        if (a > b) return 1; // если первое значение больше второго
        if (a == b) return 0; // если равны
        if (a < b) return -1; // если первое значение меньше второго
    }
    
    arr.sort(compareNumeric);
    
    console.log(arr);  // [ 1, 2, 15 ]


//some   позволяет узнать, есть ли в массиве хотя бы один элемент, удовлетворяющий условию в функции.
    /*Функция будет вызываться для каждого элемента массива до тех пор, пока не вернётся true, либо пока не закончатся элементы массива.
    Результатом вызова метода some() будет boolean-значение true или false*/
    //проверка есть ли в массиве есть хотя бы одно чётное число
    let nums = [3, 5, 7, 8, 9, 11]

    let hasEvenNumber = nums.some(num => {
        return num % 2 === 0
    })

    console.log(hasEvenNumber) // true


//every   позволяет узнать, удовлетворяют ли все элементы в массиве условию в функции.
    /*Результатом вызова метода .every() будет boolean-значение true или false*/
    let users_vk = [
        { name: 'Анна', online: true },
        { name: 'Михаил', online: true },
        { name: 'Саша', online: true },
    ]

    let isAllUsersVKOnline = users_vk.every(user => {
        return user.online
    })
    console.log(isAllUsersVKOnline) // true








//concat   создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
    /*Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями.*/
    let numbers = [1, 2];

    console.log(numbers.concat([3, 4])); // [ 1, 2, 3, 4 ] (создан массив из numbers и [3,4])

    console.log(numbers.concat([3, 4], [5, 6])); // [ 1, 2, 3, 4, 5, 6 ] (создан массив из numbers и [3,4] и [5,6])

    console.log(numbers.concat([3, 4], 5, 6)); // [ 1, 2, 3, 4, 5, 6 ] (создан массив из numbers и [3,4], потом добавились значения 5 и 6)



//reverse   меняет порядок элементов в массиве на обратный.
    let arr11 = [1, 2, 3, 4, 5];
    arr11.reverse();

    console.log(arr11); // [ 5, 4, 3, 2, 1 ]


//includes   ищет элемент массива, начиная с заданного индекса и возвращает true, если поиск успешен.
   /*Если начальный индекс не задан, по умолчанию поиск ведется с начала массива.
   Этот метод использует строгое сравнение ===
   Метод includes правильно обрабатывает NaN*/
    let new_arr = [1, 0, false];

    console.log( arr.includes(1) ); // true
    console.log( arr.includes(7) ); // false


//find   возвращает первый элемент, который удовлетворяет условию
   /*Если есть несколько удовлетворяющих элементов, будет возвращен только первый из них.
   Если ни один элемент не удовлетворяет условию, find вернет undefined.*/
    let users = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 3, name: "Маша"},
        {id: 4, name: "Вася"}
    ];
    
    let user1 = users.find(item => item.id == 1);
    
    console.log(user1.name); // Вася

    let user2 = users.find(function(item) {
        return item.id == 3
    })

    console.log(user2.name); // Маша

    // Найти индекс первого Васи
    console.log(users.findIndex(user => user.name == 'Вася')); // 0

    // Найти индекс последнего Васи
    console.log(users.findLastIndex(user => user.name == 'Вася')); // 3

    



//node Array_methods.js