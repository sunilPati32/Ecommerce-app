var bar = document.querySelector("#bar")
var close = document.querySelector("#close")
var nav = document.querySelector("#navbar")

bar.addEventListener("click",function(){
   nav.classList.add("active")
})
close.addEventListener("click",function(){
   nav.classList.remove("active")
})


