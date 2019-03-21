$(document).ready(function() {
  attachRecipeListeners();
});

//Event Listeners for recipe actions
function attachRecipeListeners(){
  //When this button is clicked run the loadRecipes() function.
  $(".recipe-link").on("click", function(){
    loadRecipes();
  });

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


function loadRecipes(){
  //pulling from api
  $.get(`/users/id/recipes.json`, function(recipe){
    $(".profile-content").append("<div class=loaded-recipes></div>")
    $.each(recipe, function(key, value){
      //creating recipe containers for each recipe
      $(".loaded-recipes").append(`<div class="recipe-${value.id}-container"><button class="listed-recipe-link" data-button="${value.id}">${value.name}</button></div>`);
    });
  });
}


function loadRecipeContent(recipe_id){
  let recipeID = recipe_id
  let recipeURL = `http://localhost:3000/users/id/recipes/${recipeID}`
  //pulling from api
  $.ajax({
    url: recipeURL,
    method: 'get',
    dataType: 'json'
  }).done(function(data){
    let currentSelectedRecipe = new Recipe(data)
    currentSelectedRecipe.displayRecipe();
  });
}
