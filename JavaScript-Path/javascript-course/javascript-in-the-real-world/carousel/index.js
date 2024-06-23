

const right = document.getElementById('right')
const left = document.getElementById('left')

let i = 3

right.addEventListener("click", () => {
    if(i < 5) {
        i++
    } else if(i = 5) {
        i = 1
    }
    showImage(i)
    console.log(i)
})

left.addEventListener("click", () => {
    if(i > 1) {
        i--
    } else if(i = 1) {
        i = 5
    }
    showImage(i)
    console.log(i)
})

function showImage(i) {
    const images = document.querySelectorAll('img')
    images.forEach(image => {
        image.style.display = 'none'
    })

    const selectedImage = document.getElementById(`img${i}`)
    if (selectedImage) {
        selectedImage.style.display = 'block'
    }
}