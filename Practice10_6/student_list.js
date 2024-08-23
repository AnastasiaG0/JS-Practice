(function() {
    //создаём и возвращаем форму для создания списка студентов
    function createListForm() {
        const textWrapper = document.createElement('div')
        const h3 = document.createElement('h3')
        const form =  document.createElement('form')
        const inputWrapper = document.createElement('div')

        const inputFullName = document.createElement('div')
        const divInputSurname = document.createElement('div')
        const h6Surname = document.createElement('h6')
        const inputSurname = document.createElement('input')
        const divInputName = document.createElement('div')
        const h6Name = document.createElement('h6')
        const inputName = document.createElement('input')
        const divInputPatronymic = document.createElement('div')
        const h6Patronymic = document.createElement('h6')
        const inputPatronymic = document.createElement('input')

        const inputStudentDetails = document.createElement('div')
        const divInputDateBirth = document.createElement('div')
        const h6DateBirth = document.createElement('h6')
        const inputDateBirth = document.createElement('input')
        const divInputYearStartStudies = document.createElement('div')
        const h6YearStartStudies = document.createElement('h6')
        const inputYearStartStudies = document.createElement('input')
        const divInputFaculty = document.createElement('div')
        const h6Faculty = document.createElement('h6')
        const inputFaculty = document.createElement('input')

        const errorMessages = document.createElement('div')
        const buttonWrapper = document.createElement('div')
        const button = document.createElement('button')

        textWrapper.classList.add('text-center', 'user-select-none')
        h3.textContent = "Данные студента"
        form.classList.add('container')
        inputWrapper.classList.add('mb-3')

        inputFullName.classList.add('row', 'justify-content-center', 'mb-2')
        divInputSurname.classList.add('col')
        inputSurname.classList.add('form-control')
        h6Surname.classList.add('user-select-none')
        h6Surname.textContent = "Фамилия:"
        divInputName.classList.add('col')
        inputName.classList.add('form-control')
        h6Name.classList.add('user-select-none')
        h6Name.textContent = "Имя:"
        divInputPatronymic.classList.add('col')
        inputPatronymic.classList.add('form-control')
        h6Patronymic.classList.add('user-select-none')
        h6Patronymic.textContent = "Отчество:"

        inputStudentDetails.classList.add('row', 'justify-content-center')
        divInputDateBirth.classList.add('col')
        inputDateBirth.classList.add('form-control')
        inputDateBirth.setAttribute('type', 'date')
        h6DateBirth.classList.add('user-select-none')
        h6DateBirth.textContent = "Дата рождения:"
        divInputYearStartStudies.classList.add('col')
        inputYearStartStudies.classList.add('form-control')
        h6YearStartStudies.classList.add('user-select-none')
        h6YearStartStudies.textContent = "Год начала обучения:"
        divInputFaculty.classList.add('col')
        inputFaculty.classList.add('form-control')
        h6Faculty.classList.add('user-select-none')
        h6Faculty.textContent = "Факультет (аббревиатура):"

        errorMessages.id = 'error-messages'
        buttonWrapper.classList.add('text-center')
        button.classList.add('btn', 'btn-primary')
        button.textContent = "Добавить студента"
        button.setAttribute('type', 'submit') //кнопка будет отправлять форму, когда на нее нажимают
        button.disabled = true //когда кнопка отключена (disabled), на нее нельзя нажать, и она визуально будет отображаться как неактивная

        textWrapper.append(h3)
        form.append(textWrapper)
        
        divInputSurname.append(h6Surname)
        divInputSurname.append(inputSurname)
        inputFullName.append(divInputSurname)
        divInputName.append(h6Name)
        divInputName.append(inputName)
        inputFullName.append(divInputName)
        divInputPatronymic.append(h6Patronymic)
        divInputPatronymic.append(inputPatronymic)
        inputFullName.append(divInputPatronymic)
        inputWrapper.append(inputFullName)

        divInputDateBirth.append(h6DateBirth)
        divInputDateBirth.append(inputDateBirth)
        inputStudentDetails.append(divInputDateBirth)
        divInputYearStartStudies.append(h6YearStartStudies)
        divInputYearStartStudies.append(inputYearStartStudies)
        inputStudentDetails.append(divInputYearStartStudies)
        divInputFaculty.append(h6Faculty)
        divInputFaculty.append(inputFaculty)
        inputStudentDetails.append(divInputFaculty)
        inputWrapper.append(inputStudentDetails)
        form.append(inputWrapper)

        form.append(errorMessages)
        buttonWrapper.append(button)
        form.append(buttonWrapper)

        const formData = {
            surname: '',
            name: '',
            patronymic: '',
            dateBirth: '',
            yearStartStudies: '',
            faculty: ''
        }

        //заполняем объект данными из формы
        function updateFormData() {
            formData.surname = inputSurname.value.trim()
            formData.name = inputName.value.trim()
            formData.patronymic = inputPatronymic.value.trim()
            formData.dateBirth = inputDateBirth.value
            formData.yearStartStudies = inputYearStartStudies.value.trim()
            formData.faculty = inputFaculty.value.trim()
        }

        function toggleButtonState() {
            updateFormData()
            //отключаем кнопку, если хотя бы одно из полей ввода пустое
            button.disabled = !inputSurname.value || !inputName.value || !inputPatronymic.value || !inputDateBirth.value || !inputYearStartStudies.value || !inputFaculty.value
        }

        inputSurname.addEventListener('input', toggleButtonState)
        inputName.addEventListener('input', toggleButtonState)
        inputPatronymic.addEventListener('input', toggleButtonState)
        inputDateBirth.addEventListener('input', toggleButtonState)
        inputYearStartStudies.addEventListener('input', toggleButtonState)
        inputFaculty.addEventListener('input', toggleButtonState)

        return {
            form,
            inputSurname,
            inputName,
            inputPatronymic,
            inputDateBirth,
            inputYearStartStudies,
            inputFaculty,
            errorMessages,
            button,
            formData,
            updateFormData
        }
    }

    //проверяем заполнение формы на наличие ошибок
    function validateStudent(formData) {
        const errors = []
        const now = new Date()
        const minDateBirth = new Date('1900-01-01')
        const currentYear = now.getFullYear()

        const containsInvalidChars = str => /[0-9a-zA-Z!@#$%^&*()_+=[\]{};':"\\|,.<>/?`~-]/.test(str)
        const containsLetters = str => /[а-яА-Яa-zA-Z]/.test(str)
        const containsPunctuation = str => /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?`~-]/.test(str);

        if (containsInvalidChars(formData.surname) || containsInvalidChars(formData.name) || containsInvalidChars(formData.patronymic)) {
            errors.push('Ф. И. О. не должно содержать цифры, латинские буквы или знаки препинания.')
        }
        if (!formData.dateBirth || new Date(formData.dateBirth) < minDateBirth || new Date(formData.dateBirth) > now) {
            errors.push('Дата рождения должна быть в диапазоне от 01.01.1900 до текущей даты.')
        }
        if (containsLetters(formData.yearStartStudies) || containsPunctuation(formData.yearStartStudies)) {
            errors.push('Год начала обучения не должен содержать буквы или знаки препинания.')
        }
        else {
            const yearStart = parseInt(formData.yearStartStudies)
            if (isNaN(yearStart) || yearStart < 2000 || yearStart > currentYear) {
                errors.push('Год начала обучения должен быть в диапазоне от 2000 до текущего года.')
            }
        }
        if (containsInvalidChars(formData.faculty)) {
            errors.push('Название факультета не должно содержать цифры, латинские буквы или знаки препинания.')
        }
        if(formData.yearStartStudies < new Date(formData.dateBirth).getFullYear()) {
            errors.push('Год рождения не должен превышать год начала обучения.')
        }

        return errors
    }  
    
    //преобразоваем строки, чтобы каждая первая буква ФИО была заглавной
    function capitalizeWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }

    //добавляем нового студента в массив
    function addNewStudent(studentsArray, formData, listForm){
        const errors = validateStudent(formData)
        const errorMessages = listForm.errorMessages

        if(errors.length > 0) {
            errorMessages.classList.add('p-3', 'mb-3', 'rounded', 'bg-danger', 'text-white')
            errorMessages.innerHTML = errors.join('<br>')
            listForm.button.disabled = true //отключаем кнопку
        }
        else {
            //преобразуем ФИО к формату с заглавными буквами
            formData.surname = capitalizeWords(formData.surname)
            formData.name = capitalizeWords(formData.name)
            formData.patronymic = capitalizeWords(formData.patronymic)

            errorMessages.innerHTML = ''
            errorMessages.classList = ''

            studentsArray.push({ ...formData}) //создаём новый объект
            
            //очищаем форму
            listForm.inputSurname.value = ''
            listForm.inputName.value = ''
            listForm.inputPatronymic.value = ''
            listForm.inputDateBirth.value = ''
            listForm.inputYearStartStudies.value = ''
            listForm.inputFaculty.value = ''

            //отключаем кнопку после добавления студента
            listForm.button.disabled = true

            saveStudentsToLocalStorage(studentsArray)
        }
    }

    //создаём фильтры полей
    function createFilterForm(containerFilterForm, studentsArray, containerList) {
        const filterWrapper = document.createElement('div')
        filterWrapper.classList.add('container', 'mt-2')

        const row1 = document.createElement('div')
        row1.classList.add('row')
        const row2 = document.createElement('div')
        row2.classList.add('row')

        const filterFields = [
            {label: 'Ф.И.О.:', id: 'filterFullName', row: row1, colClass: 'col-12'}, //одно поле на всю строку
            {label: 'Факультет (аббревиатура):', id: 'filterFaculty', row: row2, colClass: 'col-4' }, //три поля на одной строке
            {label: 'Год начала обучения:', id: 'filterYearStart', row: row2, colClass: 'col-4' },
            {label: 'Год окончания обучения:', id: 'filterYearEnd', row: row2, colClass: 'col-4' }
        ]

        filterFields.forEach(field => {
            const filterDiv = document.createElement('div')
            filterDiv.classList.add('form-group', field.colClass)

            const label = document.createElement('label')
            label.classList.add('user-select-none')
            label.textContent = field.label
            filterDiv.append(label)

            const input = document.createElement('input')
            input.classList.add('form-control')
            input.id = field.id
            filterDiv.append(input)
            field.row.append(filterDiv)

            //обновляем таблицу при изменении фильтров
            input.addEventListener('input', () => {
                renderStudentTable(studentsArray, containerList)
            })
        })

        filterWrapper.append(row1)
        filterWrapper.append(row2)
        containerFilterForm.append(filterWrapper)

        return filterWrapper
    }

    //получаем текущие значения фильтров
    function getFilters() {
        const fullNameInput = document.getElementById('filterFullName')
        const facultyInput = document.getElementById('filterFaculty')
        const yearStartInput = document.getElementById('filterYearStart')
        const yearEndInput = document.getElementById('filterYearEnd')

        return {
            fullName: fullNameInput ? fullNameInput.value.trim() : '',
            faculty: facultyInput ? facultyInput.value.trim() : '',
            yearStart: yearStartInput ? yearStartInput.value.trim() : '',
            yearEnd: yearEndInput ? yearEndInput.value.trim() : ''
        }
    }

    //считаем возраст студента
    function calculateStudentAge(studentDateBirth) {
        const now = new Date()
        const dateBirth = new Date(studentDateBirth)
        let age = now.getFullYear() - dateBirth.getFullYear()
        const month = now.getMonth() - dateBirth.getMonth()

        if(month < 0 || (month == 0 && now.getDate() < dateBirth.getDate())) {
            age--
        }

        return age
    }

    //форматируем данные о студенте
    function formatStudentData(student) {
        const dateBirth = new Date(student.dateBirth)
        const age = calculateStudentAge(student.dateBirth)
        const dateBirthString = dateBirth.toLocaleDateString('ru-RU')
        const ageString = `${dateBirthString} (${age} лет)`

        const startYear = parseInt(student.yearStartStudies)
        const endYear = startYear + 4
        const currentYear = new Date().getFullYear()
        const currentMonth = new Date().getMonth()

        let course
        if(currentYear > endYear || (currentYear === endYear && currentMonth >= 8)) {
            course = -1
        }
        else if(currentMonth >= 8) {
            course = currentYear - startYear + 1
        }
        else {
            course = currentYear - startYear
        }

        const courseString = course == -1 ? 'закончил' : (course == 0 ? 'зачислен' : `${course} курс`)
        const studyPeriodString = `${startYear}-${endYear} (${courseString})`

        return {
            fullName: `${student.surname} ${student.name} ${student.patronymic}`, 
            faculty: student.faculty,
            ageString,
            studyPeriodString
        }
    }

    //сортировка массива студентов по выбранному столбцу таблицы
    function sortTableByColumn(studentsArray, columnIndex, containerList) {
        //массив ключей для доступа к свойствам объектов студентов
        const keyMap = ['fullName', 'faculty', 'dateBirth', 'yearStartStudies']
        
        studentsArray.sort((a, b) => {
            let valueA, valueB;

            //сортируем по Ф. И. О.
            if (columnIndex === 0) { 
                valueA = `${a.surname} ${a.name} ${a.patronymic}`
                valueB = `${b.surname} ${b.name} ${b.patronymic}`
            }
            //сортируем по факультету
            else if (columnIndex === 1) {
                valueA = a.faculty
                valueB = b.faculty
            }
            //сортируем по дате рождения
            else if (columnIndex === 2) {
                valueA = new Date(a.dateBirth)
                valueB = new Date(b.dateBirth)
            }
            //сортируем по году начала обучения
            else if (columnIndex === 3) {
                valueA = parseInt(a.yearStartStudies)
                valueB = parseInt(b.yearStartStudies)
            }

            return valueA > valueB ? 1 : (valueA < valueB ? -1 : 0)
        })

        renderStudentTable(studentsArray, containerList)
    }

    //создаём окно подстверждения удаления информации о всех студентах
    function showModal(onConfirm) {
        //создаём элементы модального окна
        const modal = document.createElement('div')
        const modalDialog = document.createElement('div')
        const modalContent = document.createElement('div')
        const modalHeader = document.createElement('div')
        const modalBody = document.createElement('div')
        const modalFooter = document.createElement('div')
    
        modal.classList.add('modal', 'fade', 'show')
        modal.style.display = 'block'
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; //затемнение фона
        modalDialog.classList.add('modal-dialog')
        modalContent.classList.add('modal-content')
        modalContent.style.backgroundColor = '#f8d7da'; // Цвет фона модального окна
        modalHeader.classList.add('modal-header')
        modalBody.classList.add('modal-body')
        modalFooter.classList.add('modal-footer')
    
        modalHeader.innerHTML = '<h5 class="modal-title">Подтверждение удаления</h5>'
        modalBody.textContent = 'Вы уверены, что хотите удалить информацию о всех студентах?'
        modalFooter.innerHTML = `
            <button type="button" class="btn btn-secondary" id="modalCancel">Нет</button>
            <button type="button" class="btn btn-danger" id="modalConfirm">Да</button>
        `
    
        modalContent.append(modalHeader, modalBody, modalFooter)
        modalDialog.append(modalContent)
        modal.append(modalDialog)
        document.body.append(modal)
    
        //обработчик кнопки "Да"
        document.getElementById('modalConfirm').addEventListener('click', () => {
            onConfirm()
            document.body.removeChild(modal)
        })
    
        //обработчик кнопки "Нет"
        document.getElementById('modalCancel').addEventListener('click', () => {
            document.body.removeChild(modal)
        })
    }

    //создаём кнопку удаления информации
    function createDeleteButton(studentsArray, containerList) {
        let containerDelete = document.getElementById('delete_list')
        

        //проверяем, есть ли студенты
        if (studentsArray.length === 0) {
            if (containerDelete) {
                containerDelete.remove() //удаляем кнопку, если студентов нет
            }
            return
        }

        if (containerDelete) {
            containerDelete.classList.add('d-flex', 'justify-content-end')
        }
        else {
            containerDelete = document.createElement('div')
            containerDelete.id = 'delete_list'
            containerDelete.classList.add('d-flex', 'justify-content-end')
            containerList.parentNode.appendChild(containerDelete) //добавляем контейнер после таблицы
        }

        const buttonDelete = document.createElement('button')
        buttonDelete.classList.add('btn', 'btn-danger')
        buttonDelete.textContent = "Удалить информацию"
        buttonDelete.addEventListener('click', () => {
            showModal(() => {
                studentsArray.length = 0 // очищаем массив студентов
                saveStudentsToLocalStorage(studentsArray)
                renderStudentTable(studentsArray, containerList)
                createDeleteButton(studentsArray, containerList) //обновляем кнопку после удаления
            })
        })

        containerDelete.innerHTML = '' //очистка предыдущего содержимого
        containerDelete.appendChild(buttonDelete)

        return containerDelete
    }

    //создаём таблицу с данными студентов
    function renderStudentTable(studentsArray, containerList) {
        containerList.innerHTML = '' //очищаем контейнер с таблицей

        const textWrapper = document.createElement('div')
        const h3 = document.createElement('h3')
        textWrapper.classList.add('text-center', 'user-select-none')
        h3.textContent = 'Список студентов'

        textWrapper.append(h3)
        const filters = getFilters()

        //применяем фильтры
        const filteredStudents = studentsArray.filter(student => {
            const fullName = `${student.surname} ${student.name} ${student.patronymic}`
            const yearEnd = parseInt(student.yearStartStudies) + 4

            return (!filters.fullName || fullName.toLowerCase().includes(filters.fullName.toLowerCase())) &&
               (!filters.faculty || student.faculty.toLowerCase().includes(filters.faculty.toLowerCase())) &&
               (!filters.yearStart || student.yearStartStudies === filters.yearStart) &&
               (!filters.yearEnd || yearEnd.toString() === filters.yearEnd)
        })
        
        if(studentsArray.length == 0) {
            const h5 = document.createElement('h5')
            h5.textContent = 'Нет информации о студентах'

            textWrapper.append(h5)
            containerList.append(textWrapper)
        }
        else if(filteredStudents.length == 0) {
            const h5 = document.createElement('h5')
            h5.textContent = 'Студенты с такими данными не найдены'

            textWrapper.append(h5)
            containerList.append(textWrapper)

            const containerDelete = document.getElementById('delete_list');
            if (containerDelete) {
                containerDelete.innerHTML = ''; 
            }
        }

        else {
            const table = document.createElement('table')
            const thead = document.createElement('thead')
            const headerRow = document.createElement('tr')
            const tbody = document.createElement('tbody')
            const headers = ['Ф. И. О.', 'Факультет', 'Дата рождения и возраст', 'Годы обучения']

            table.classList.add('table', 'table-striped')

            headers.forEach((header, columnIndex) => {
                const th = document.createElement('th')
                th.textContent = header
                th.style.cursor = 'pointer'
                th.addEventListener('click', () => sortTableByColumn(filteredStudents, columnIndex, containerList))
                headerRow.append(th)
            })

            filteredStudents.forEach(student => {
                const studentData = formatStudentData(student)
                const row = document.createElement('tr')

                Object.values(studentData).forEach(value => {
                    const td = document.createElement('td')
                    td.textContent = value
                    row.appendChild(td)
                })

                tbody.appendChild(row)
            })

            thead.append(headerRow)
            table.append(thead)
            table.append(tbody)
            containerList.append(textWrapper)
            containerList.append(table)

            createDeleteButton(studentsArray, containerList)
        }

        
        /*// Показываем кнопку удаления информации, если есть студенты
        const deleteButtonContainer = document.getElementById('delete_list')

        if (deleteButtonContainer) {
            deleteButtonContainer.style.display = filteredStudents.length ? 'block' : 'none'
        }
        else {
            createDeleteButton(studentsArray, containerList)
        }*/
    }

    //сохраняем данные студентов в localStorage
    function saveStudentsToLocalStorage(studentsArray) {
        localStorage.setItem('students', JSON.stringify(studentsArray));
    }

    //загружаем данные студентов из localStorage
    function loadStudentsFromLocalStorage() {
        const storedStudents = localStorage.getItem('students');
        return storedStudents ? JSON.parse(storedStudents) : [];
    }

    function createStudentsList(container) {
        const containerForm = document.getElementById('list_form')
        const containerFilterForm = document.getElementById('filter_form')
        const containerList = document.getElementById('list')

        let studentsArray = loadStudentsFromLocalStorage()

        const listForm = createListForm()   
        
        containerForm.append(listForm.form)
        container.prepend(containerForm)

        createFilterForm(containerFilterForm, studentsArray, containerList)

        renderStudentTable(studentsArray, containerList)

        //браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела
        listForm.form.addEventListener('submit', function(e) {
            //эта строка необходима, чтобы предотвратить стандартное действие браузера
            //в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault()
            
            addNewStudent(
                studentsArray,
                listForm.formData,
                listForm
            )

            saveStudentsToLocalStorage(studentsArray) //сохраняем данные после добавления студента
            renderStudentTable(studentsArray, containerList)
        })
    }
    window.createStudentsList = createStudentsList
}) ()