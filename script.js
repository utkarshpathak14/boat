let btn1 = document.querySelector(".btn")
let box1 = document.querySelector(".box")

btn1.addEventListener("click",()=>{
    box1.classList.toggle("open")

    
      // "✖"btn1.innerText = "✖"
    document.getElementById("mobile").classList.toggle(".open")
   
    document.getElementById("mobile").classList.toggle(".view")
   

})
box1.addEventListener("click",()=>{
    box1.classList.remove("open")


})
