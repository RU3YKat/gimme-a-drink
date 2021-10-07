var checkboxEl = document.querySelector("#checkbox");
var buttonEl = document.querySelector("#grab-drink");

function acknowledgement (event) {
    event.preventDefault();
    console.log("button clicked");
    if (!checkboxEl.checked) {
        document.querySelector(`.modal`).modal();
    }
    else {
        document.location.replace("./main.htm");
    }
 }

buttonEl.addEventListener("click", acknowledgement)
