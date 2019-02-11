$(document).ready(function() {
  attachListeners();
});

function attachListeners(){
  //When this button is clicked run the loadRecipes() function.
  $(".recipe-link").on("click", function(){
    loadRecipes();
  });

  //This is a way to add an event listener to a button that hasnt been created yet
  $(".profile-content").on('click', ".listed-recipe-link", function(){
    let data = $.parseJSON($(this).attr('data-button'));
    loadRecipeContent(data);
  });
}


function loadRecipes(){
  //pulling from api
  $.get(`/users/id/recipes.json`, function(recipe){
    $.each(recipe, function(key, value){
      //creating recipe containers for each recipe
      $(".profile-content").append(`<div class="recipe-${value.id}-container"><button class="listed-recipe-link" data-button="${value.id}">${value.name}</button></div>`);
    });
  });
}


function loadRecipeContent(recipe_id){
  let recipeID = recipe_id
  //pulling from api
  $.get(`/users/id/recipes/${recipeID}.json`, function(recipe){
    //adding recipe description from show api to recipe container
    $(`.recipe-${recipe.id}-container`).append(`<div class="recipe-contents">
      <ul>
        <li>${recipe.name}</li>
        <li>Description: ${recipe.description}</li>
        <li>Calories: ${recipe.calories}</li>
        <li>Carbs: ${recipe.carbs}</li>
        <li>Protein: ${recipe.protein}</li>
        <li>Fats: ${recipe.fats}</li>
      </ul>
    </div>`);
  })
}
