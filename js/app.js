console.log("its running bro :/")


function newTaskPopup () {
    const popup_area = document.querySelector(".popup_area")
    const popup_newtask = document.querySelector(".popup_newtask")

    popup_area.classList.add("mostrar")
    popup_newtask.classList.add("mostrar")
}

function closeTaskPopup () {
    const popup_area = document.querySelector(".popup_area")
    const popup_newtask = document.querySelector(".popup_newtask")

    popup_area.classList.remove("mostrar")
    popup_newtask.classList.remove("mostrar")
}

const button_newtask = document.querySelector("#newtask_btn")
button_newtask.addEventListener("click", newTaskPopup)

const button_cancelcreatetask = document.querySelector(".button_cancelcreatetask")
button_cancelcreatetask.addEventListener("click", closeTaskPopup)

function newColumnPopup () {
    const popup_area = document.querySelector(".popup_area")
    const popup_newcolumn = document.querySelector(".popup_newcolumn")

    popup_area.classList.add("mostrar")
    popup_newcolumn.classList.add("mostrar")
}

const button_newcolumn = document.querySelector('#newcolumn_btn')
button_newcolumn.addEventListener("click", newColumnPopup)

function closeColumnPopup () {
    const popup_area = document.querySelector(".popup_area")
    const popup_newcolumn = document.querySelector(".popup_newcolumn")

    popup_area.classList.remove("mostrar")
    popup_newcolumn.classList.remove("mostrar")
}

const btn_cancel = document.querySelector(".btn_cancel")
btn_cancel.addEventListener("click", closeColumnPopup)


function changeTheme () {
    const html = document.documentElement
    const theme = html.getAttribute("data-theme")

    if (theme == light) {
        html.setAttribute("data-theme", "dark")
        const icon = document.querySelector(".icon-theme")
    }else {
        html.setAttribute("data-theme", "light")
    }
    return theme
}


