
var button = document.querySelector("#favorite"); 

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
    M.AutoInit()
});

var cocktailList = function() {

    fetch("https://the-cocktail-db.p.rapidapi.com/randomselection.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "5740a3f78bmsha24cbdd12a168aap1fc0f7jsn41d963f62282"
	}
})
        .then(function(response) {
            // request successful
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayRandomCocktail(data);
                });
            } else {
                alert("Error")
            }
        })
        .catch(function(error) {
            console.log(err);
        });
};

var displayRandomCocktail = function(cocktails) {
    console.log(cocktails.drinks[0]);
  
    //Drink #1
    var cocktailSection = document.querySelector("#drink1");
        var aTag1= document.createElement("a")
        aTag1.href="#recipe-modal"
        aTag1.classList.add("modal-trigger")
        
        var img = document.createElement("img");
        img.classList = "responsive-img";
        img.src = cocktails.drinks[0].strDrinkThumb;
        img.setAttribute("data-drinkNum",0)
        aTag1.appendChild(img)
        cocktailSection.appendChild(aTag1);

    aTag1.addEventListener("click",(e)=>{recipeInfo(e,cocktails)})

        var drinkName= document.createElement("h5");
        drinkName.classList = "drink-title";
        drinkName.innerHTML = cocktails.drinks[0].strDrink;
        cocktailSection.appendChild(drinkName);
  
    //Drink #2
    var cocktailSection = document.querySelector("#drink2");
        var aTag2= document.createElement("a")
        aTag2.href="#recipe-modal"
        aTag2.classList.add("modal-trigger")

        var img = document.createElement("img");
        img.classList = "responsive-img";
        img.src = cocktails.drinks[1].strDrinkThumb;
        img.setAttribute("data-drinkNum",1)
        aTag2.appendChild(img)
        cocktailSection.appendChild(aTag2);

        aTag2.addEventListener("click",(e)=>{recipeInfo(e,cocktails)})
        
        var drinkName= document.createElement("h5");
        drinkName.classList = "drink-title";
        drinkName.innerHTML = cocktails.drinks[1].strDrink;
        cocktailSection.appendChild(drinkName);
  
    // Drink #3
    var cocktailSection = document.querySelector("#drink3");
        var aTag3= document.createElement("a")
        aTag3.href="#recipe-modal"
        aTag3.classList.add("modal-trigger")

        var img = document.createElement("img");
        img.classList = "responsive-img";
        img.src = cocktails.drinks[2].strDrinkThumb;
        img.setAttribute("data-drinkNum",2)
        aTag3.appendChild(img)
        cocktailSection.appendChild(aTag3);

        aTag3.addEventListener("click",(e)=>{recipeInfo(e,cocktails)})
        
        var drinkName= document.createElement("h5");
        drinkName.classList = "drink-title";
        drinkName.innerHTML = cocktails.drinks[2].strDrink;
        cocktailSection.appendChild(drinkName);
  
    // Drink #4
    var cocktailSection = document.querySelector("#drink4");
    var aTag4= document.createElement("a")
    aTag4.href="#recipe-modal"
    aTag4.classList.add("modal-trigger")

    var img = document.createElement("img");
    img.classList = "responsive-img";
    img.src = cocktails.drinks[3].strDrinkThumb;
    img.setAttribute("data-drinkNum",3)
    aTag4.appendChild(img)
    cocktailSection.appendChild(aTag4);

    aTag4.addEventListener("click",(e)=>{recipeInfo(e,cocktails)})
    
    var drinkName= document.createElement("h5");
    drinkName.classList = "drink-title";
    drinkName.innerHTML = cocktails.drinks[3].strDrink;
    cocktailSection.appendChild(drinkName);
  
    // Drink #5
    var cocktailSection = document.querySelector("#drink5");
    var aTag5= document.createElement("a")
    aTag5.href="#recipe-modal"
    aTag5.classList.add("modal-trigger")

    var img = document.createElement("img");
    img.classList = "responsive-img";
    img.src = cocktails.drinks[4].strDrinkThumb;
    img.setAttribute("data-drinkNum",4)
    aTag5.appendChild(img)
    cocktailSection.appendChild(aTag5);

    aTag5.addEventListener("click",(e)=>{recipeInfo(e,cocktails)})
    
    var drinkName= document.createElement("h5");
    drinkName.classList = "drink-title";
    drinkName.innerHTML = cocktails.drinks[4].strDrink;
    cocktailSection.appendChild(drinkName);
  
    // Drink #6
    var cocktailSection = document.querySelector("#drink6");
    var aTag6= document.createElement("a")
    aTag6.href="#recipe-modal"
    aTag6.classList.add("modal-trigger")

    var img = document.createElement("img");
    img.classList = "responsive-img";
    img.src = cocktails.drinks[5].strDrinkThumb;
    img.setAttribute("data-drinkNum",5)
    aTag6.appendChild(img)
    cocktailSection.appendChild(aTag6);

    aTag6.addEventListener("click",(e)=>{recipeInfo(e,cocktails)})
    
    var drinkName= document.createElement("h5");
    drinkName.classList = "drink-title";
    drinkName.innerHTML = cocktails.drinks[5].strDrink;
    cocktailSection.appendChild(drinkName);
  
    // Drink #7
    var cocktailSection = document.querySelector("#drink7");
    var aTag7= document.createElement("a")
    aTag7.href="#recipe-modal"
    aTag7.classList.add("modal-trigger")

    var img = document.createElement("img");
    img.classList = "responsive-img";
    img.src = cocktails.drinks[6].strDrinkThumb;
    img.setAttribute("data-drinkNum",6)
    aTag7.appendChild(img)
    cocktailSection.appendChild(aTag7);

    aTag7.addEventListener("click",(e)=>{recipeInfo(e,cocktails)})
    
    var drinkName= document.createElement("h5");
    drinkName.classList = "drink-title";
    drinkName.innerHTML = cocktails.drinks[6].strDrink;
    cocktailSection.appendChild(drinkName);
  
    // Drink #8
    var cocktailSection = document.querySelector("#drink8");
    var aTag8= document.createElement("a")
    aTag8.href="#recipe-modal"
    aTag8.classList.add("modal-trigger")

    var img = document.createElement("img");
    img.classList = "responsive-img";
    img.src = cocktails.drinks[7].strDrinkThumb;
    img.setAttribute("data-drinkNum",7)
    aTag8.appendChild(img)
    cocktailSection.appendChild(aTag8);

    aTag8.addEventListener("click",(e)=>{recipeInfo(e,cocktails)})
    
    var drinkName= document.createElement("h5");
    drinkName.classList = "drink-title";
    drinkName.innerHTML = cocktails.drinks[7].strDrink;
    cocktailSection.appendChild(drinkName);
  
    // Drink #9
    var cocktailSection = document.querySelector("#drink9");
    var aTag9= document.createElement("a")
    aTag9.href="#recipe-modal"
    aTag9.classList.add("modal-trigger")

    var img = document.createElement("img");
    img.classList = "responsive-img";
    img.src = cocktails.drinks[8].strDrinkThumb;
    img.setAttribute("data-drinkNum",8)
    aTag9.appendChild(img)
    cocktailSection.appendChild(aTag9);

    aTag9.addEventListener("click",(e)=>{recipeInfo(e,cocktails)})
    
    var drinkName= document.createElement("h5");
    drinkName.classList = "drink-title";
    drinkName.innerHTML = cocktails.drinks[8].strDrink;
    cocktailSection.appendChild(drinkName);
  
    // Drink 10
    var cocktailSection = document.querySelector("#drink10");
    var aTag10= document.createElement("a")
    aTag10.href="#recipe-modal"
    aTag10.classList.add("modal-trigger")

    var img = document.createElement("img");
    img.classList = "responsive-img";
    img.src = cocktails.drinks[9].strDrinkThumb;
    img.setAttribute("data-drinkNum",9)
    aTag10.appendChild(img)
    cocktailSection.appendChild(aTag10);

    aTag10.addEventListener("click",(e)=>{recipeInfo(e,cocktails)})
    
    var drinkName= document.createElement("h5");
    drinkName.classList = "drink-title";
    drinkName.innerHTML = cocktails.drinks[9].strDrink;
    cocktailSection.appendChild(drinkName);
};

function recipeInfo(e, cocktails){
    
    let drinkNum = e.target.getAttribute("data-drinkNum");
    let drinkName = document.querySelector(".drink-name")
    drinkName.innerText = cocktails.drinks[drinkNum].strDrink
    let drinkRecipe = document.querySelector(".drink-instructions")
    drinkRecipe.innerText = cocktails.drinks[drinkNum].strInstructions

    var ingredient = document.querySelector(".idrink-ingredients");

    for(var i=1; i<16; i++) {
        console.log();

        if(cocktails.drinks[drinkNum][`strIngredient${i}`] == null  ||  cocktails.drinks[drinkNum][`strIngredient${i}`] == "" || cocktails.drinks[drinkNum][`strMeasure${i}`] == null || cocktails.drinks[drinkNum][`strMeasure${i}`] == "") {
            break;
        };
    var ingred= document.createElement("li");
    ingred.innerHTML = cocktails.drinks[drinkNum][`strMeasure${i}`] + ": " + cocktails.drinks[drinkNum][`strIngredient${i}`];
    ingredient.appendChild(ingred);
    };
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems);
});


//var add = function add() {
    //var ul = document.getElementById("save-list");
    //var li = document.createElement("a");
    //li.classList = "collection-item";
    //li.innerHTML = "Cocktail Name";

    //ul.appendChild(li);

cocktailList();