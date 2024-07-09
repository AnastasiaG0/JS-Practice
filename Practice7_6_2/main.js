function createStudentCard(student) {
    let card = document.createElement('div')
    card.className = "student-card"

    let student_name = document.createElement('h2')
    student_name.textContent = student.name
    card.append(student_name)

    let student_age = document.createElement('span')
    student_age.textContent = `Возраст: ${student.age}`
    card.append(student_age)

    document.body.append(card)
}

let student1 = {
    name: "Игорь",
    age: 17
}

let student2 = {
    name: "Наталья",
    age: 20
}

let student3 = {
    name: "Павел",
    age: 10
}

createStudentCard(student1)
createStudentCard(student2)
createStudentCard(student3)