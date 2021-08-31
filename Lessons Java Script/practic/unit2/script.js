let inputName = document.querySelector('.name')
let inputAge = document.querySelector('.age')
let inputLike = document.querySelector('.like')
let button = document.querySelector('.button')
let out = document.querySelector('.out')

button.onclick = function() {
    let outName = inputName.value
    let outAge = inputAge.value
    let outLike = inputLike.value

    alert("Привіт! Тебе звуть " + outName + ". " + "Тобі " + outAge + ". " + "Ти найбільше любиш " + outLike + ". " + " Це круто!")
}