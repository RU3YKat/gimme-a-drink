var checkboxEl = document.querySelector("#checkbox");
var buttonEl = document.querySelector("#grab-drink")
 function acknowledgement (event) {
    if (!checkboxEl.checked) {
        alert("You must be 21 or older!")
    }
    else {
        document.location.replace("./main.html");
    }
 }

buttonEl.addEventListener("click", acknowledgement)
