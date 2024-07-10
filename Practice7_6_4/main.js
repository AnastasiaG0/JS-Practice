function createStudentsList(listArr) {
    let cardList = document.createElement('ul')

    listArr.forEach(student => {
        let card = document.createElement('li')
        card.className = "student-card"

        card.innerHTML = `
            <h2>${student.name}</h2>
            <span>Возраст: ${student.age}</span>
        `

        cardList.appendChild(card)
    })

    studentListContainer.innerHTML = ''
    studentListContainer.appendChild(cardList)
}

let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
]

let studentListContainer = document.createElement('div')
studentListContainer.setAttribute('id', 'student-list-container')
document.body.append(studentListContainer)

let showStudentsBtn = document.getElementById('show-students-btn')
showStudentsBtn.addEventListener('click', () => {
    if (studentListContainer && studentListContainer.innerHTML !== '') {
        studentListContainer.innerHTML = '';
        showStudentsBtn.textContent = "Показать список"
    } else {
        createStudentsList(allStudents);
        showStudentsBtn.textContent = "Скрыть список"
    }
})



//node main.js