const button = document.querySelector(".button")
const menu = document.getElementById('menu')


button.addEventListener("click", () => {
    hide()
})


function hide() {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"
    }
}

