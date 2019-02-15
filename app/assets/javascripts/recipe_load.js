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
        <div class="visit-recipe-${recipe.id}-container"><button class="visit-recipe-link" data-button="${recipe.id}">Visit Recipe Page</button></div>
      </ul>
    </div>`);
  })
}

//Need to add creator 
function createRecipePage(recipe_id){
  let recipeID = recipe_id;
  $(".loaded-recipes").remove();
  $.get(`/users/id/recipes/${recipeID}.json`, function(recipe){
    $(".profile-content").append(`<div class="recipe-${recipe.id}-container">
    <h1>${recipe.name}</h1>
    <h2>Description:</h2>
    <p>${recipe.description}</p>
    <h2>Calories:</h2>
    <p>${recipe.calories}</p>
    <h2>Carbs:</h2>
    <p>${recipe.carbs}</p>
    <h2>Protein:</h2>
    <p>${recipe.protein}</p>
    <h2>Fats:</h2>
    <p>${recipe.fats}</p>
    <h2>Created By:</h2>
    <p>${recipe.creator}</p>
    </div>`)
  })
}
