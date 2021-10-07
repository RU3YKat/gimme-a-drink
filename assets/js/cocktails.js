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
        console.log(cocktails.drinks[""]);

        var cocktailSection = document.querySelector("#drink1");

            var img = document.createElement("img");
            img.classList = "responsive-img";
            img.src = cocktails.drinks[0].strDrinkThumb;

            cocktailSection.appendChild(img);

            var drinkName= document.createElement("h5");
            drinkName.classList = "drink-title";
            drinkName.innerHTML = cocktails.drinks[0].strDrink;

            cocktailSection.appendChild(drinkName);

        var cocktailSection = document.querySelector("#drink2");

            var img = document.createElement("img");
            img.classList = "responsive-img";
            img.src = cocktails.drinks[1].strDrinkThumb;

            cocktailSection.appendChild(img);

            var drinkName= document.createElement("h5");
            drinkName.classList = "drink-title";
            drinkName.innerHTML = cocktails.drinks[1].strDrink;

            cocktailSection.appendChild(drinkName);

        var cocktailSection = document.querySelector("#drink3");

            var img = document.createElement("img");
            img.classList = "responsive-img";
            img.src = cocktails.drinks[2].strDrinkThumb;

            cocktailSection.appendChild(img);

            var drinkName= document.createElement("h5");
            drinkName.classList = "drink-title";
            drinkName.innerHTML = cocktails.drinks[2].strDrink;

            cocktailSection.appendChild(drinkName);

        var cocktailSection = document.querySelector("#drink4");

            var img = document.createElement("img");
            img.classList = "responsive-img";
            img.src = cocktails.drinks[3].strDrinkThumb;

            cocktailSection.appendChild(img);

            var drinkName= document.createElement("h5");
            drinkName.classList = "drink-title";
            drinkName.innerHTML = cocktails.drinks[3].strDrink;

            cocktailSection.appendChild(drinkName);
        
        var cocktailSection = document.querySelector("#drink5");

            var img = document.createElement("img");
            img.classList = "responsive-img";
            img.src = cocktails.drinks[4].strDrinkThumb;

            cocktailSection.appendChild(img);

            var drinkName= document.createElement("h5");
            drinkName.classList = "drink-title";
            drinkName.innerHTML = cocktails.drinks[4].strDrink;

            cocktailSection.appendChild(drinkName);

        var cocktailSection = document.querySelector("#drink6");

            var img = document.createElement("img");
            img.classList = "responsive-img";
            img.src = cocktails.drinks[5].strDrinkThumb;

            cocktailSection.appendChild(img);

            var drinkName= document.createElement("h5");
            drinkName.classList = "drink-title";
            drinkName.innerHTML = cocktails.drinks[5].strDrink;

            cocktailSection.appendChild(drinkName);

        var cocktailSection = document.querySelector("#drink7");

            var img = document.createElement("img");
            img.classList = "responsive-img";
            img.src = cocktails.drinks[6].strDrinkThumb;

            cocktailSection.appendChild(img);

            var drinkName= document.createElement("h5");
            drinkName.classList = "drink-title";
            drinkName.innerHTML = cocktails.drinks[6].strDrink;

            cocktailSection.appendChild(drinkName);

        var cocktailSection = document.querySelector("#drink8");

            var img = document.createElement("img");
            img.classList = "responsive-img";
            img.src = cocktails.drinks[7].strDrinkThumb;

            cocktailSection.appendChild(img);

            var drinkName= document.createElement("h5");
            drinkName.classList = "drink-title";
            drinkName.innerHTML = cocktails.drinks[7].strDrink;

            cocktailSection.appendChild(drinkName);

        var cocktailSection = document.querySelector("#drink9");

            var img = document.createElement("img");
            img.classList = "responsive-img";
            img.src = cocktails.drinks[8].strDrinkThumb;

            cocktailSection.appendChild(img);

            var drinkName= document.createElement("h5");
            drinkName.classList = "drink-title";
            drinkName.innerHTML = cocktails.drinks[8].strDrink;

            cocktailSection.appendChild(drinkName);

        var cocktailSection = document.querySelector("#drink10");

            var img = document.createElement("img");
            img.classList = "responsive-img";
            img.src = cocktails.drinks[9].strDrinkThumb;

            cocktailSection.appendChild(img);

            var drinkName= document.createElement("h5");
            drinkName.classList = "drink-title";
            drinkName.innerHTML = cocktails.drinks[9].strDrink;

            cocktailSection.appendChild(drinkName);

    };

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
    console.log();
});

cocktailList();