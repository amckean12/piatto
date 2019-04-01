$(document).ready(function() {
  attachRecipeListeners();
});



//Event Listeners for recipe actions
const attachRecipeListeners = () =>{
  //When this button is clicked run the loadRecipes() function.
  //ES6
  $(".recipe-link").on("click", (event) => {loadRecipes()});

  //This is a way to add an event listener to a button that hasnt been created yet
  $(".profile-content").on('click', ".listed-recipe-link", function(){
    let data = $.parseJSON($(this).attr('data-button'));
    loadRecipeContent(data);
  });

  //Listening for visit recipe button click
  $(".profile-content").on('click', ".visit-recipe-link", function(){
    let data = $.parseJSON($(this).attr('data-button'));
    createRecipePage(data);
  });
}


const loadRecipes = () => {
  //pulling from api
  $.get(`/users/id/recipes.json`, (recipe) => {
    $(".profile-content").append("<div class=recipe-sort-button-container><button class=recipe-sort>Sort Recipes Alphabetically</button></div><br><br>")
    if ($(".loaded-recipes").length === 0){
    $(".profile-content").append("<div class=loaded-recipes></div>")
  }
    $(".loaded-recipes").empty();
    $.each(recipe, (key, value) => {
      let newRecipeObj = new Recipe(value);
      $(".loaded-recipes").append(newRecipeObj.buildRecipeButton());
      //creating recipe containers for each recipe
      //$(".loaded-recipes").append(`<div class="recipe-${value.id}-container"><button class="listed-recipe-link" data-button="${value.id}">${value.name}</button></div>`);
    });
  });
}


const loadRecipeContent = (recipe_id) => {
  let recipeID = recipe_id
  let recipeURL = `http://localhost:3000/users/id/recipes/${recipeID}`
  //pulling from api
  $.ajax({
    url: recipeURL,
    method: 'get',
    dataType: 'json'
  }).done((data) =>{
    let currentSelectedRecipe = new Recipe(data)
    currentSelectedRecipe.displayRecipe();
  });
}
