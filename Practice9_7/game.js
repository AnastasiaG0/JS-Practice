(function() {
    //создаём и возвращаем форму для создания игрового поля
    function createGameForm() {
        const textWrapper = document.createElement('div')
        const h1 = document.createElement('h1')
        const h3 = document.createElement('h3')
        const form = document.createElement('form')
        const inputWrapper = document.createElement('div')
        const inputHorizontal = document.createElement('input')
        const inputVertical = document.createElement('input')
        const buttonWrapper = document.createElement('div')
        const button = document.createElement('button')

        textWrapper.classList.add('input-group', 'd-flex', 'flex-column', 'mb-1', 'align-items-center', 'user-select-none')
        h1.textContent = "Игра в пары"
        h3.textContent = "Введите количество карточек:"
        form.classList.add('input-group', 'd-flex', 'flex-column') // input-group - группа элементов формы
        inputWrapper.classList.add('col-md-4', 'mx-auto')
        inputHorizontal.classList.add('form-control', 'mb-2') // для правильного отображения формы
        inputHorizontal.placeholder = "по горизонтали (чётное число от 2 до 10)" // поясление что именно нужно вводить в поле
        inputVertical.classList.add('form-control', 'mb-3') // для правильного отображения формы
        inputVertical.placeholder = "по вертикали (чётное число от 2 до 10)" // поясление что именно нужно вводить в поле
        buttonWrapper.classList.add('mx-auto') //позиционирование элемента по середине формы
        button.classList.add('btn', 'btn-primary', 'btn-lg') // btn - применение всех стилей для каждой кнопки, btn-primary - отрисовка кнопки синим цветом
        button.textContent = "Начать игру"
        button.setAttribute('type', 'submit') //кнопка будет отправлять форму, когда на нее нажимают
        button.disabled = true //когда кнопка отключена (disabled), на нее нельзя нажать, и она визуально будет отображаться как неактивная

        textWrapper.append(h1)
        textWrapper.append(h3)
        form.append(textWrapper)
        inputWrapper.append(inputHorizontal)
        inputWrapper.append(inputVertical)
        form.append(inputWrapper)
        buttonWrapper.append(button)
        form.append(buttonWrapper)

        // отключение кнопки, если одно из полей ввода пустое
        inputHorizontal.addEventListener('input', function() {
            button.disabled = !inputHorizontal.value || !inputVertical.value
        })

        inputVertical.addEventListener('input', function() {
            button.disabled = !inputHorizontal.value || !inputVertical.value
        })

        return {
            form,
            inputHorizontal,
            inputVertical,
            button
        }
    }

    //создаём и перемешиваем массив чисел
    function createCardsNumbers(valueHorizontal, valueVertical){
        const cardsNumberArray = []

        if(valueHorizontal >= 2 && valueHorizontal <= 10 && valueHorizontal % 2 == 0 &&
            valueVertical >= 2 && valueVertical <= 10 && valueVertical % 2 == 0) {
            const pairsCardsCount = valueHorizontal * valueVertical / 2

            for(let count = 1; count <= pairsCardsCount; count++) {
                cardsNumberArray.push(count, count)
            }
        }

        else {
            valueHorizontal = 4
            valueVertical = 4
            const pairsCardsCount = valueHorizontal * valueVertical / 2

            for(let count = 1; count <= pairsCardsCount; count++) {
                cardsNumberArray.push(count, count)
            }
        }

        for (let index = 0; index < cardsNumberArray.length; index++) {
            const randomIndex = Math.round(Math.random() * (cardsNumberArray.length - 1))
            
            const element = cardsNumberArray[index]
            cardsNumberArray[index] = cardsNumberArray[randomIndex]
            cardsNumberArray[randomIndex] = element
        }

        console.log (cardsNumberArray)
        return {
            cardsNumberArray,
            valueHorizontal,
            valueVertical
        }
    }

    //создаём таймер и кнопку "Начать сначала"
    function createTimerRestartButton(containerBoard, duration, onTimeUp) {
        const timerButtonWrapper = document.createElement('div')
        const timer = document.createElement('span')
        const button = document.createElement('button')
        
        timerButtonWrapper.classList.add('fixed-top', 'w-100', 'p-3', 'px-5', 'd-flex', 'justify-content-between', 'user-select-none') // fixed-top - элемент в верхней части экрана
        timer.classList.add('p-2')
        button.classList.add('btn', 'btn-secondary') //'btn' - базовый стиль кнопки, 'btn-secondary' - кнопка серого цвета
        button.textContent = "Начать сначала"

        let minutes = Math.floor(duration / 60)
        let remainingSeconds = duration % 60
        timer.textContent = `Оставшееся время: ${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`

        const interval = setInterval(() => {
            duration--
            minutes = Math.floor(duration / 60)
            remainingSeconds = duration % 60
            timer.textContent = `Оставшееся время: ${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`

            if(duration <= 0) {
                clearInterval(interval)

                onTimeUp()
            }
        }, 1000)

        button.addEventListener('click', function() {
            containerBoard.innerHTML = '' //очищает содержимое контейнера, в котором находится игровое поле
            const container = document.getElementById('game')
            createGameApp(container) //перезапускает приложение игры, создавая новую форму для ввода параметров игрового поля
        })

        timerButtonWrapper.append(timer)
        timerButtonWrapper.append(button)
        containerBoard.append(timerButtonWrapper)

        //возвращаем функцию для остановки таймера
        return () => clearInterval(interval)
    }
    
    //создаём карточки
    function createGameCards(cardsNumberArray, valueHorizontal, valueVertical, containerBoard, onAllCardsOpen){
        let firstCard = null
        let secondCard = null
        let isProcessing = false //переменная для отслеживания состояния
        
        for(let countVertical = 0; countVertical < valueVertical; countVertical++) {
            const rowCards = document.createElement('div')
            rowCards.classList.add('row', 'justify-content-center', 'align-items-center')

            for(let countHorizontal = 0; countHorizontal < valueHorizontal; countHorizontal++) {
                const card = document.createElement('div')

                //card - применяет стили карточки, m-1 - добавляет отступ (margin) вокруг карточки (0.25rem), d-inline-block - располагает элемент в одну строку с другими элементами, text-center - центрирует текст внутри карточки, user-select-none - текст не будет доступен для выбора при нажатии
                card.classList.add('card', 'm-1', 'd-inline-block', 'text-center', 'user-select-none')

                card.style.width = '70px' //ширина карточки
                card.style.height = '70px' //высота карточки
                card.style.lineHeight = '70px' //вертикальное выравнивание текста
                card.style.fontSize = '24px' //размер текста
                card.style.backgroundColor = '#FFC433' //цвет фона карточки
                card.style.transition = 'background-color 0.3s ease' // добавление плавного перехода
                card.style.cursor = 'pointer' //изменение курсора на руку при наведении на карточки
                
                card.addEventListener('mouseover', function() {
                    if(card.classList.contains('coincidental')) {
                        card.style.backgroundColor = '#0df973'
                    }

                    else if(card.classList.contains('open')) {
                        card.style.backgroundColor = '#dba100'
                    }
                    
                    else if(isProcessing) {
                        card.style.backgroundColor = '#FFC433'
                    }

                    else if(!card.classList.contains('open')) {
                        card.style.backgroundColor = '#ffd877'
                    }
                })

                card.addEventListener('mouseout', function() {
                    if(card.classList.contains('coincidental')) {
                        card.style.backgroundColor = '#0df973'
                    }

                    else if(card.classList.contains('open')) {
                        card.style.backgroundColor = '#dba100'
                    }
                                                            
                    else if(isProcessing) {
                        card.style.backgroundColor = '#FFC433'
                    }


                    else if(!card.classList.contains('open')) {
                        card.style.backgroundColor = '#FFC433'
                    }
                })

                card.addEventListener('click', function() {                   
                    //если карточка уже открыта, ничего не делаем
                    if (card.classList.contains('open') || isProcessing) {
                        return
                    }

                    card.classList.add('open')

                    card.style.backgroundColor = '#dba100'
                    card.textContent = cardsNumberArray[countVertical * valueHorizontal + countHorizontal]

                    if(firstCard === null) {
                        firstCard = card
                    }

                    else {
                        secondCard = card
                    }

                    if(firstCard !== null && secondCard !== null) {
                        isProcessing = true //начало обработки

                        const cards = containerBoard.querySelectorAll('.card')
                        for (let oneCard of cards) {
                            oneCard.style.cursor = 'default' //изменение курсора на обычный при наведении на карточки
                        }

                        //сравнение карточек
                        if(firstCard.textContent == secondCard.textContent) {
                            firstCard.classList.add('coincidental')
                            secondCard.classList.add('coincidental')

                            firstCard.style.backgroundColor = '#0df973'
                            secondCard.style.backgroundColor = '#0df973'

                            firstCard = null
                            secondCard = null

                            //проверка открытия всех карточек
                            let flag = true
                            for (let oneCard of cards) {
                                if (!oneCard.classList.contains('coincidental')) {
                                    flag = false
                                    break
                                }
                            }

                            if(flag) {
                                setTimeout(() => onAllCardsOpen(), 500) //задержка в 0,5 секунды 
                            }

                            isProcessing = false //завершение обработки

                            for (let oneCard of cards) {
                                if(!oneCard.classList.contains('coincidental'))
                                    oneCard.style.cursor = 'pointer' //изменение курсора на руку при наведении на закрытые карточки
                            }
                        }
                
                        else {
                            setTimeout(() => {
                                firstCard.style.backgroundColor = '#FFC433'
                                secondCard.style.backgroundColor = '#FFC433'
                                firstCard.textContent = ''
                                secondCard.textContent = ''

                                firstCard.classList.remove('open')
                                secondCard.classList.remove('open')

                                firstCard = null
                                secondCard = null

                                isProcessing = false //завершение обработки

                                for (let oneCard of cards) {
                                    if(!oneCard.classList.contains('coincidental'))
                                        oneCard.style.cursor = 'pointer' //изменение курсора на руку при наведении на закрытые карточки
                                }
                            }, 1000) //задержка в 1 секунду                                                       
                        }
                    }
                })
                
                rowCards.append(card)                
            }

            containerBoard.append(rowCards)
        }    
    }

    let finalScreenDisplayed = false //флаг для индикации, был ли уже показан конечный экран

    //создание конечного экрана
    function createFinalScreen(containerBoard, containerFinal, message, stopTimer) {
        //проверка флага
        if (finalScreenDisplayed) {
            return
        }

        finalScreenDisplayed = true //установка флага

        containerBoard.innerHTML = '' //очищаем контейнер с карточками

        const finalScreen = document.createElement('div')
        const finalMassage = document.createElement('h1')
        const restartButton = document.createElement('button')

        finalScreen.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center', 'text-align-center', 'user-select-none')
        finalMassage.textContent = message
        restartButton.classList.add('btn', 'btn-primary', 'btn-lg', 'mt-4')
        restartButton.textContent = "Начать сначала"

        restartButton.addEventListener('click', function() {
            containerFinal.innerHTML = '' //очищает содержимое контейнера, в котором находится конечный экран

            const container = document.getElementById('game')
            createGameApp(container) //перезапускает приложение игры, создавая новую форму для ввода параметров игрового поля
        })

        finalScreen.append(finalMassage)
        finalScreen.append(restartButton)
        containerFinal.append(finalScreen)

        //останавливаем таймер
        if (stopTimer) {
            stopTimer()
        }
        
        finalScreenDisplayed = true // устанавливаем флаг
    }

    function createGameApp(container){
        const containerForm = document.getElementById('game-form')
        const containerBoard = document.getElementById('game-board')
        const containerFinal = document.getElementById('game-final')

        const gameForm = createGameForm()

        containerForm.append(gameForm.form)
        container.append(containerForm)

        //браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела
        gameForm.form.addEventListener('submit', function(e) {
            //эта строка необходима, чтобы предотвратить стандартное действие браузера
            //в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault()

            //игнорируем создание элемента если пользователь ничего не ввёл в поле
            if(!gameForm.inputHorizontal.value || !gameForm.inputVertical.value) {
                return
            }

            containerForm.innerHTML = '' //удаляем форму

            //создаём карточки с цифрами
            const cardsNumbers = createCardsNumbers(gameForm.inputHorizontal.value, gameForm.inputVertical.value)

            containerBoard.innerHTML = '' //очищаем контейнер перед добавлением новых карточек

            let allottedTime = 60

            if(gameForm.inputHorizontal.value * gameForm.inputVertical.value / 2 > 8 && gameForm.inputHorizontal.value * gameForm.inputVertical.value / 2 < 18) {
                allottedTime = 240
            }

            else if(gameForm.inputHorizontal.value * gameForm.inputVertical.value / 2 >= 18 && gameForm.inputHorizontal.value * gameForm.inputVertical.value / 2 < 24) {
                allottedTime = 360
            }

            else if(gameForm.inputHorizontal.value * gameForm.inputVertical.value / 2 >= 24 && gameForm.inputHorizontal.value * gameForm.inputVertical.value / 2 < 32) {
                allottedTime = 600
            }

            else if(gameForm.inputHorizontal.value * gameForm.inputVertical.value / 2 >= 32 && gameForm.inputHorizontal.value * gameForm.inputVertical.value / 2 <= 50) {
                allottedTime = 900
            }

            const stopTimer = createTimerRestartButton(
                containerBoard,
                allottedTime,
                () => createFinalScreen(containerBoard, containerFinal, 'Время вышло! Игра окончена.', stopTimer)
            )
            
            createGameCards(
                cardsNumbers.cardsNumberArray,
                cardsNumbers.valueHorizontal,
                cardsNumbers.valueVertical,
                containerBoard,
                () => createFinalScreen(containerBoard, containerFinal, 'Поздравляем! Вы открыли все карточки.', stopTimer)
            )
        })
   
    }

    window.createGameApp = createGameApp
}) ()