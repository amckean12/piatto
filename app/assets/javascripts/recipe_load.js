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
  $.get(`/users/id/recipes.json`, function(recipe){
    $.each(recipe, function(key, value){
      $(".profile-content").append(`<div class="recipe-${value.id}-container"><button class="listed-recipe-link" data-button="${value.id}">${value.name}</button></div>`);
    });
  });
}

//name, description, calories, carbs, protein, fats

function loadRecipeContent(recipe_id){
  let recipeID = recipe_id
  $.get(`/users/id/recipes/${recipeID}.json`, function(recipe){
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
