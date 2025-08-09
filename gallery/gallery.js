
function info(id){
    let up = document.getElementById(`i${id}`)

    up.style.height = '100%'
    up.style.opacity = '.6'
}

function infoOut(id){
    let up = document.getElementById(`i${id}`)
    
    up.style.height = '0%'
    up.style.opacity = '0'
}