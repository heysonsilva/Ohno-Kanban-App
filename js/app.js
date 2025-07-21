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
