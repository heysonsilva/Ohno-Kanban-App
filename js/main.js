// const { createElement } = require("react")

console.log("its running bro :D")

function newTaskPopup() {
    const popup_area = document.querySelector(".popup_area")
    const popup_newtask = document.querySelector(".popup_newtask")

    popup_area.classList.add("mostrar")
    popup_newtask.classList.add("mostrar")
}

const button_newtask = document.querySelector("#newtask_btn")
button_newtask.addEventListener("click", newTaskPopup)

function newBoardPopup() {
    const popup_area = document.querySelector(".popup_area")
    const popup_newboard = document.querySelector(".popup_newboard")

    popup_area.classList.add("mostrar")
    popup_newboard.classList.add("mostrar")
}

const button_newboard = document.querySelector("#newboard_btn")
button_newboard.addEventListener('click', newBoardPopup)

function closeTaskPopup() {
    const popup_area = document.querySelector(".popup_area")
    const popup_newtask = document.querySelector(".popup_newtask")

    popup_area.classList.remove("mostrar")
    popup_newtask.classList.remove("mostrar")
}

const button_cancelcreatetask = document.querySelector(".button_cancelcreatetask")
button_cancelcreatetask.addEventListener("click", closeTaskPopup)

function closeBoardPopup() {
    const popup_area = document.querySelector(".popup_area")
    const popup_newboard = document.querySelector(".popup_newboard")

    popup_area.classList.remove("mostrar")
    popup_newboard.classList.remove("mostrar")
}

const button_cancelnewboard = document.querySelector(".btn_cancelnewboard")
button_cancelnewboard.addEventListener("click", closeBoardPopup)

function changeTheme() {
    const html = document.documentElement
    const theme = html.getAttribute("data-theme")

    if (theme != "dark") {
        html.setAttribute("data-theme", "dark")
        const themeIcon = document.querySelector(".themeIcon")
        themeIcon.classList.remove("fa-moon")
        themeIcon.classList.add("fa-sun")
    } else {
        html.setAttribute("data-theme", "light")
        const themeIcon = document.querySelector(".themeIcon")
        themeIcon.classList.remove("fa-sun")
        themeIcon.classList.add("fa-moon")
    }
    return theme
}

const button_changeTheme = document.querySelector('.btn_changeTheme')
button_changeTheme.addEventListener('click', changeTheme)


// CONSUMINDO DADO DO ARQUIVO MOCK.JSON
let kanbanData = {}

async function handlerKanbanData() {
    const response = await fetch('mock.json');
    const data = await response.json();
    return kanbanData = data
}

handlerKanbanData().then(() => {
    console.log("rodou aq")
    for (let i = 0; i < kanbanData.columns.length; i++) {
        let columnName = kanbanData.columns[i].name
        let tasks = kanbanData.columns[i].tasks

        let taskFiltred = tasks.filter(item => item.status === columnName)

        for (let j = 0; j < taskFiltred.length; j++) {
            const titleTask = taskFiltred[j].title
            // const descriptionTask = tasks[j].description

            const columnhtml = document.querySelector(`.${columnName}`)

            const cardTask = document.createElement("div")
            cardTask.classList.add("card", "card_task")

            const span = document.createElement("span")
            const i = document.createElement("i")
            i.classList.add("fa-regular", "fa-eye")
            span.appendChild(i)

            const p = document.createElement("p")
            p.textContent = titleTask
            p.classList.add("title_task")

            columnhtml.appendChild(cardTask)
            cardTask.appendChild(span)
            cardTask.appendChild(p)
        }
    }
})

//  OPERAÇÕES DE CRUD

function crateNewTask() {
    const inputName = document.querySelector(".input_taskname").value
    const inputDescription = document.querySelector(".input_taskdescription").value
    let inputColumn = document.querySelector(".input_selectcolumn").value
    console.log(inputColumn)

    if ((!inputName) || (!inputColumn || "none") || (!inputDescription)) {    
        window.alert("Preencha Todos os Campos para Prosseguir")
    } else {
        const columnhtml = document.getElementsByClassName(inputColumn)[0]

        const cardTask = document.createElement("div")
        cardTask.classList.add("card", "card_task")

        const span = document.createElement("span")
        const i = document.createElement("i")
        i.classList.add("fa-regular", "fa-eye")
        span.appendChild(i)

        const p = document.createElement("p")
        p.textContent = inputName
        p.classList.add("title_task")

        cardTask.appendChild(span)
        cardTask.appendChild(p)
        columnhtml.appendChild(cardTask)
        closeTaskPopup()
    }
}

const createNewTaskButton = document.querySelector("#button_createtask")
createNewTaskButton.addEventListener("click", crateNewTask)