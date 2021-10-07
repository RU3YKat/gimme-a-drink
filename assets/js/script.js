const checkboxEl = document.querySelector("#checkbox") 
const buttonEl = document.querySelector("#Gimme-a-Drink")


checkboxEl.addEventListener("change",function(e){
    if(this.checked){
        buttonEl.classList.remove("disabled")
    } else{buttonEl.classList.add("disabled")
}})

