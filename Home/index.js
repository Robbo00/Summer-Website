let background = document.getElementById('back')
let change = document.getElementById('first')
let fresh = document.getElementById('real')
let main = document.getElementById('mainBack')
let swish = document.getElementById('dy')
let point = document.getElementById('point')
let vis = document.getElementById('vis')
let cont = document.getElementById('cont')
let left = document.getElementById('lef')
let right = document.getElementById('righ')

let switchBacks = ['/background/dogs.mp4', '/background/two.mp4']
let switchHeads = ['Activities Page', 'Gallery Page']
let switchSub = ['Visit this page to explore different varities of summer activities', 'Visit this page to see beautiful pictures']


function intro(){
    change.style.top = '-50px'
    setTimeout(function(){change.style.display = 'none'}, 1000) 
    fresh.style.top = '0'
    setTimeout(function(){cont.style.visibility = 'visible'},  1000) 
    main.setAttribute('src', '/background/dogs.mp4')
    setTimeout(function(){swish.style.width = '100%'}, 1000) 
    setTimeout(function(){cont.style.top = '36%'}, 2000) 
    setTimeout(function(){vis.style.visibility = 'visible'}, 2700) 
    setTimeout(function(){
        left.classList.add('a'); 
        right.classList.add('a')}, 3000) 
}
function back(){
        cont.style.visibility = 'hidden'

    change.style.top = '0px'
    change.style.display = 'initial'
    fresh.style.top = '100%'
    swish.style.width = '0'
    cont.style.top = '-100%'
    vis.style.visibility = 'hidden'
    left.classList.remove('a'); 
    right.classList.remove('a')
}