let background = document.getElementById('back')
let change = document.getElementById('first')
let fresh = document.getElementById('real')
let main = document.getElementById('mainBack')
let swish = document.getElementById('dy')
let point = document.getElementById('point')
let vis = document.getElementById('vis')
let cont = document.getElementById('cont')

function intro(){
    change.style.top = '-50px'
    change.style.display = 'none'
    fresh.style.top = '0'
    setTimeout(function(){cont.style.visibility = 'visible'},  1000) 
    main.setAttribute('src', '/background/dogs.mp4')
    setTimeout(function(){swish.style.width = '100%'}, 1000) 
    setTimeout(function(){cont.style.top = '40%'}, 2500) 
    setTimeout(function(){vis.style.visibility = 'visible'}, 3300) 
}