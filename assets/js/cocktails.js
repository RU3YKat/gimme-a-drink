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

    var cocktailSection = document.querySelector("#drink1");

        var img = document.createElement("img");
        img.classList = "responsive-img";
        img.src = cocktails.drinks[0].strDrinkThumb;

        cocktailSection.appendChild(img);

        var drinkName= document.createElement("span");
        drinkName.classList = "card-title";
        drinkName.innerHTML = cocktails.drinks[0].strDrink;

        cocktailSection.appendChild(drinkName);

    var ingredientSection = document.querySelector("#list1");

        for(var i=1; i<16; i++) {
            console.log();

            if(cocktails.drinks[0][`strIngredient${i}`] == null  ||  cocktails.drinks[0][`strIngredient${i}`] == "") {
                break;
            }

            var ingredient = document.createElement("li");
            ingredient.ClassList = "collection-item";
            ingredient.innerHTML = cocktails.drinks[0][`strMeasure${i}`] + ": " + cocktails.drinks[0][`strIngredient${i}`];

            ingredientSection.appendChild(ingredient);
        };

    var cocktailSection = document.querySelector("#drink2");

        var img = document.createElement("img");
        img.classList = "responsive-img";
        img.src = cocktails.drinks[1].strDrinkThumb;

        cocktailSection.appendChild(img);

        var drinkName= document.createElement("span");
        drinkName.classList = "card-title";
        drinkName.innerHTML = cocktails.drinks[1].strDrink;

        cocktailSection.appendChild(drinkName);

    var ingredientSection = document.querySelector("#list2");

        for(var i=1; i<16; i++) {
            console.log();

            if(cocktails.drinks[1][`strIngredient${i}`] == null  ||  cocktails.drinks[1][`strIngredient${i}`] == "") {
                break;
            }
            
            var ingredient = document.createElement("li");
            ingredient.ClassList = "collection-item";
            ingredient.innerHTML = cocktails.drinks[1][`strMeasure${i}`] + ": " + cocktails.drinks[1][`strIngredient${i}`];

            ingredientSection.appendChild(ingredient);
        };

    var cocktailSection = document.querySelector("#drink3");

        var img = document.createElement("img");
        img.classList = "responsive-img";
        img.src = cocktails.drinks[2].strDrinkThumb;

        cocktailSection.appendChild(img);

        var drinkName= document.createElement("span");
        drinkName.classList = "card-title";
        drinkName.innerHTML = cocktails.drinks[2].strDrink;

        cocktailSection.appendChild(drinkName);

    var ingredientSection = document.querySelector("#list3");

        for(var i=1; i<16; i++) {
            console.log();

            if(cocktails.drinks[2][`strIngredient${i}`] == null  ||  cocktails.drinks[2][`strIngredient${i}`] == "") {
                break;
            }
            
            var ingredient = document.createElement("li");
            ingredient.ClassList = "collection-item";
            ingredient.innerHTML = cocktails.drinks[2][`strMeasure${i}`] + ": " + cocktails.drinks[2][`strIngredient${i}`];

            ingredientSection.appendChild(ingredient);
        };

    var cocktailSection = document.querySelector("#drink4");

        var img = document.createElement("img");
        img.classList = "responsive-img";
        img.src = cocktails.drinks[3].strDrinkThumb;

        cocktailSection.appendChild(img);

        var drinkName= document.createElement("span");
        drinkName.classList = "card-title";
        drinkName.innerHTML = cocktails.drinks[3].strDrink;

        cocktailSection.appendChild(drinkName);

    var ingredientSection = document.querySelector("#list4");

        for(var i=1; i<16; i++) {
            console.log();

            if(cocktails.drinks[3][`strIngredient${i}`] == null  ||  cocktails.drinks[3][`strIngredient${i}`] == "") {
                break;
            }
            
            var ingredient = document.createElement("li");
            ingredient.ClassList = "collection-item";
            ingredient.innerHTML = cocktails.drinks[3][`strMeasure${i}`] + ": " + cocktails.drinks[3][`strIngredient${i}`];

            ingredientSection.appendChild(ingredient);
        };
};

cocktailList();