let  btnChange = document.querySelector(".btnChange");
let consejos = document.querySelector(".consejos");
let advicenumber = document.querySelector(".Advice")


btnChange.addEventListener("click",function () {
 
    fetch("https://api.adviceslip.com/advice")
    .then(response=>response.json())
    .then(data=>{consejos.innerText = `"${data.slip.advice}"`;advicenumber.innerText =`Advice #${data.slip.id}` })
    
 
    
})
