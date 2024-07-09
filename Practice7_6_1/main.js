function createStudentCard(name, age) {
    let card = document.createElement('div')
    card.className = "student-card"

    let student_name = document.createElement('h2')
    student_name.textContent = name
    card.append(student_name)

    let student_age = document.createElement('span')
    student_age.textContent = `Возраст: ${age}`
    card.append(student_age)

    document.body.append(card)
}

createStudentCard("Игорь", 17)
createStudentCard("Наталья", 20)
createStudentCard("Павел", 10)