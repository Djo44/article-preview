let btn = document.querySelector(".share")
let bubble = document.querySelector(".speech-bubble")

btn.addEventListener("click", function () {
  bubble.classList.toggle("d-flex")
})