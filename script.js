const hbmg = document.getElementById("hbg")
const menu1 = document.querySelector(".menu-1")
const menu2 = document.querySelector(".menu-2")

const row = document.querySelectorAll(".row")
let index = true
hbmg.addEventListener("click",()=>{
    if(index){
        menu1.style.visibility = "hidden"
        menu2.style.display = "block"
        menu2.classList.add("move")
        hbmg.src = "images/icon-close.svg"
    
        index = false
    }
    else{
        menu2.classList.remove("move")
        menu2.style.display = "none"
        menu1.style.visibility = "inherit"
        hbmg.src = "images/icon-hamburger.svg"
        index = true
    }

})

const connectContent = document.querySelector(".row-connect .row")
const showContent = document.querySelector(".connect-content")
const imgArrow = document.querySelector(".row-connect .row img")
let j = true
connectContent.addEventListener("click",()=>{
    if(j){
        showContent.style.display = "block"
        imgArrow.src = "images/icon-arrow-light.svg"
        j = false
    }
    else{
        showContent.style.display = "none"
        imgArrow.src = "images/icon-arrow-dark.svg"
        j = true

    }
    
})

const desktopConnect = document.querySelector(".desktop-line .row-connect .row")
const imgdes = document.querySelector(".desktop-line .row-connect .row img")
const menudefil = document.querySelector(".desktop-line .connect-content")

let i = true
desktopConnect.addEventListener("click",()=>{
    if(i){
        menudefil.style.visibility = "inherit"
        imgdes.src = "images/icon-arrow-light.svg"
        i = false
    }
    else{
        menudefil.style.visibility = "hidden"
        imgdes.src = "images/icon-arrow-dark.svg"
        i = true
    }
})
