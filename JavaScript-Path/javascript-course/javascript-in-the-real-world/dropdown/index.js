const button = document.querySelector(".button")
const menu = document.getElementById('menu')


button.addEventListener("click", () => {
    hide(menu)
})


function hide(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none"
    }
}

