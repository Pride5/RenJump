const ren = document.getElementById("Ren")
const voenka = document.getElementById("Voenka")

document.addEventListener("keydown", function(event) {
    jump();
})

function jump () {
 if (ren.classList.add != ("jump")) {
     ren.classList.add("jump")
 }
 setTimeout ( function(){
    ren.classList.remove("jump")
 }, 500)
}

let isAlive = setInterval (function(){
    let renTop = parseInt (window.getComputedStyle(ren).getPropertyValue("top"))
    let voenkaLeft = parseInt (window.getComputedStyle(voenka).getPropertyValue("left"))
    
    if (voenkaLeft < 100 && voenkaLeft > 0 && renTop >= 280) {
        alert ("ПОВЕСТКА ПОЛУЧЕНА!")
    }
}, 10)