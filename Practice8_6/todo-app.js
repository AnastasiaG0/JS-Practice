(function() {
    //создаём и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2')
        appTitle.innerHTML = title
        return appTitle
    }

    //создаём и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form')
        let input = document.createElement('input')
        let buttonWrapper = document.createElement('div')
        let button = document.createElement('button')

        form.classList.add('input-group', 'mb-3') // input-group - группа элементов формы, mb-3 - оставляет отступ после формы
        input.classList.add('form-control') // для правильного отображения формы
        input.placeholder = "Введите название нового дела" // поясление что именно нужно вводить в поле
        buttonWrapper.classList.add('input-group-append') // позиционирование элемента справа от поля для ввода
        button.classList.add('btn', 'btn-primary') // btn - применение всех стилей для каждой кнопки, btn-primary - отрисовка кнопки синим цветом
        button.textContent = "Добавить дело"
        button.setAttribute('type', 'submit') //кнопка будет отправлять форму, когда на нее нажимают
        button.disabled = true //когда кнопка отключена (disabled), на нее нельзя нажать, и она визуально будет отображаться как неактивная

        buttonWrapper.append(button)
        form.append(input)
        form.append(buttonWrapper)

        /*
        <form class="input-group mb-3">
            <input class="form-control" placeholder="Введите название нового дела">
            <div class="input-group-append">
                <button class="btn btn-primary">Добавить дело</button>
            </div>
        </form>
        */

        //отключение кнопки, если поле ввода пустое
        input.addEventListener('input', function() {
            button.disabled = !input.value
        })

        return {
            form, 
            input,
            button
        }
    }

    //создаём и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul')
        list.classList.add('list-group')
        return list
    }

    //создаём список дел
    function createTodoItem(todo) {
        let item = document.createElement('li')
        //кнопки помещаем в один элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div')
        let doneButton = document.createElement('button')
        let deleteButton = document.createElement('button')

        //устанавливаем стили для элемента списка, а также для размещения кнопок в его правой части с помощью flex
        //list-group-item - показать элемент внутри списка, остальные классы для того, чтобы правильно выровнять элементы внутри li
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center') //
        item.textContent = todo.name

        if (todo.done) {
            item.classList.add('list-group-item-success');
        }

        buttonGroup.classList.add('btn-group', 'btn-group-sm') //btn-group - применяем стили группы кнопок, btn-group-sm - делает группу немного меньше по высоте
        doneButton.classList.add('btn', 'btn-success') //btn-success - делает кнопку зелёной
        doneButton.textContent = "Готово"
        deleteButton.classList.add('btn', 'btn-danger') //btn-danger - делает кнопку красной
        deleteButton.textContent = "Удалить"

        //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
        buttonGroup.append(doneButton)
        buttonGroup.append(deleteButton)
        item.append(buttonGroup)

        //приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item,
            doneButton, 
            deleteButton
        }
    }



    //загрузка списка задач после перезагрузки страницы
    function loadTodos(key) {
        let todosStr = localStorage.getItem(key)
        return todosStr ? JSON.parse(todosStr) : []
    }

    //сохранение списка задач
    function saveTodos(key, todos) {
        localStorage.setItem(key, JSON.stringify(todos))
    }

    //поиск максимального id в массиве дел и добавление 1 к максимальному id
    function createId(todos) {
        if(todos.length > 0) {
            return Math.max(...todos.map(todo => todo.id)) + 1
        }

        else {
            return 1
        }
    }

    //
    function createTodoApp(container, title = 'Список дел', listName = 'default') {
        let todoAppTitle = createAppTitle(title)
        let todoItemForm = createTodoItemForm()
        let todoList = createTodoList()

        container.append(todoAppTitle)
        container.append(todoItemForm.form)
        container.append(todoList)

        //загрузка задач при перезагрузке страницы
        let todos = loadTodos(listName)

        todos.forEach(todo => {
            let todoItem = createTodoItem(todo)

            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success')
                todo.done = !todo.done
                saveTodos(listName, todos)
            })

            todoItem.deleteButton.addEventListener('click', function() {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove()
                    todos = todos.filter(t => t.id !== todo.id)
                    saveTodos(listName, todos)
                }
            })

            todoList.append(todoItem.item)
        });

        //браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e) {
            //эта строка необходима, чтобы предотвратить стандартное действие браузера
            //в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault()

            //игнорируем создание элемента если пользователь ничего не ввёл в поле
            if(!todoItemForm.input.value) {
                return
            }
          
            //создаём объект
            let newTodoItem = {
                id: createId(todos),
                name: todoItemForm.input.value,
                done: false
            }

            let todoItem = createTodoItem(newTodoItem)

            //добавляем обработчики на кнопки
            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success')
                newTodoItem.done = !newTodoItem.done
                saveTodos(listName, todos)
            })
            todoItem.deleteButton.addEventListener('click', function() {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove()
                    todos = todos.filter(t => t.id !== newTodoItem.id)
                    saveTodos(listName, todos)
                }
            })

            todos.push(newTodoItem)
            saveTodos(listName, todos)

            //создаём и добавляем в список новое дело с названием из поля для ввода
            todoList.append(todoItem.item)

            //обнуляем значение в поле, чтобы не пришлось стирать его вручную
            todoItemForm.input.value = ''
            //когда поле ввода пустое, устанавливается атрибут disabled
            todoItemForm.button.disabled = true
        })
    }

    window.createTodoApp = createTodoApp
}) ()

