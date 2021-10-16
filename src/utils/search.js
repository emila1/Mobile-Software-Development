const recipes = require('../../recipes/recipes.json')

/**
 * 
 * @param {String array of ingredients} ingredientList 
 * @param {number of returned recipes} n 
 */
function searchIngredients(ingredientList, n) {
    let returnList = [];
    let recipeIndex = [];

    Object.keys(recipes).forEach(key => {            // Looks up every recipe
        let ingredients = recipes[key].ingredients; // Assign current ingredient list to variable

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

    recipeIndex.map((index) => {                  // Add found recipes to returned list.
        returnList.push(index, recipes[index]);
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
        returnRecipes.push(rnd, recipes[rnd]);
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



// let list = ["onion", "aubergine", "milk", "butter", "spaghetti", "oil"]; 

// let t0= performance.now(); //start time
// console.log(searchIngredients(list, 10)); 
// console.log(getRandomRecipe(10));
// let t1= performance.now(); //end time

// console.log('Time taken to execute function:'+ (t1-t0) +' milliseconds');


export { searchIngredients, getRandomRecipe };



