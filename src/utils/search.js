const recipes = require('../../recipes/recipes.json')

/**
 * 
 * @param {String array of ingredients} ingredientList 
 * @param {number of returned recipes} n 
 */
function searchIngredients(ingredientList, n) {
    // convert all strings in ingredientList to lowercase
    ingredientList = ingredientList.map(function (item) {
        return item.toLowerCase()
    })
    let returnList = [];
    let recipeIndex = [];

    Object.keys(recipes).forEach(key => {            // Looks up every recipe
        let ingredients = recipes[key].ingredients; // Assign current ingredient list to variable

        // convert all strings in ingredients to lowercase
        ingredients = ingredients.map(function (item) {
            return item.toLowerCase();
        });
        ingredients.forEach(element => {            // Check each string in ingredients list 
            ingredientList.forEach(item => {        // Check against each item in MyFridge
                if (element.includes(item)) {
                    //console.log(key);
                    recipeIndex.push(key);           // If matched, add recipe number to list
                    //console.log(recipes[key].title, item);
                }
            });
        });
    });
    recipeIndex = sortByFrequency(recipeIndex);   // Returns duplicate-free, sorted list of recipes  
    recipeIndex = recipeIndex.slice(0, n);        // Limit returned list to N recipes

    recipeIndex.map((index) => {                  // Add found recipe indexes to returned list.
        //returnList.push(index, recipes[index]);
        returnList.push(parseInt(index));
    });
    return returnList;
    //return returnList;
}

/**
 * 
 * @param {Number of returned recipes} n 
 */
function getRandomRecipe(n = 5) {
    let returnRecipes = [];

    for (let i = 0; i < n; i++) {
        let rnd = randomNumber(0, recipes.length);
        returnRecipes.push(parseInt(rnd));
        // console.log(rnd, recipes[rnd]);
    }
    return returnRecipes;
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortByFrequency(array) {
    var frequency = {};

    array.forEach(function (value) { frequency[value] = 0; });

    var uniques = array.filter(function (value) {
        return ++frequency[value] == 1;
    });

    return uniques.sort(function (a, b) {
        return frequency[b] - frequency[a];
    });
}

export { searchIngredients, getRandomRecipe};



