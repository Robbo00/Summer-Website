let background = document.getElementById('back')
let change = document.getElementById('first')
let fresh = document.getElementById('real')
let main = document.getElementById('mainBack')

function intro(){
    change.style.top = '-50px'
    change.style.display = 'none'
    fresh.style.top = '0'
    main.setAttribute('src', '/background/dogs.mp4')
}