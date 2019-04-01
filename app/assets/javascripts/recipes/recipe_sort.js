$(document).ready(function() {
  attachRecipeSortingListener();
});

const recipeValues = [];

const attachRecipeSortingListener = () => {
  $(".profile-content").on('click', ".recipe-sort", function(){
    sortRecipes();
  });
}

const sortRecipes = () => {
  let sortedArray = allRecipes.sort((a, b) => {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
    });
   $(".loaded-recipes").empty();
   $.each(sortedArray, (key, value) => {
     $(".loaded-recipes").append(value.buildRecipeButton());
     //creating recipe containers for each recipe
     //$(".loaded-recipes").append(`<div class="recipe-${value.id}-container"><button class="listed-recipe-link" data-button="${value.id}">${value.name}</button></div>`);
   });
}
