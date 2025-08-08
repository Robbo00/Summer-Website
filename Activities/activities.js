let title = document.getElementById('title')
let lay = document.getElementById('layout')

   setTimeout(function(){title.style.opacity = '1'}, 500) 

   function slide(){
        lay.style.left = '-100%'
        console.log('ran')
   }