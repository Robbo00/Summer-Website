let title = document.getElementById('title')
let lay = document.getElementById('layout')
let home = document.getElementById('home')

   setTimeout(function(){title.style.opacity = '1'}, 500) 
   setTimeout(function(){home.style.opacity = '1'}, 500) 

function slide(){
     lay.style.left = '-100%'
     console.log('ran')
}

function playVid(id){
     document.getElementById(`vid${id}`).play()

}

function stopVid(id){
     document.getElementById(`vid${id}`).pause()
}

function search(id){
     id = `s${id}`
     id = document.getElementById(id).classList
     console.log(id)
     window.location.href = `https://www.google.com/search?q=${id}&rlz=1C1GCEA_enUS1174US1174&oq=${id}&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg0IARAAGJIDGIAEGIoFMg0IAhAAGJIDGIAEGIoFMgoIAxAAGLEDGIAEMgcIBBAAGIAEMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMgcIBxAAGIAEMgcICBAAGI8CMgcICRAAGI8C0gEJMjk3MGowajE1qAIIsAIB8QXtyytNGkzlSA&sourceid=chrome&ie=UTF-8
     `
}