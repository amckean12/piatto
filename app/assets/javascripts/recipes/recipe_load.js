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

  //Listening for clicking of edit recipe button
  $(".profile-content").on('click', ".recipe-edit-button", function(){
    let data = $.parseJSON($(this).attr('data-button'));
    loadRecipeEditForm(data);
  });

  //Listening for the submission of the edit recipe form
  $(".profile-content").on('click', ".submit-edit-recipe-button", function(){
    let data = $.parseJSON($(this).attr('data-button'));
    updateRecipe(data);
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
    createRecipePage(currentSelectedRecipe);
  });
}

//Create Recipe page by calling a recipe class function
function createRecipePage(recipe){
   let completeRecipe = recipe;
   completeRecipe.displayRecipe(recipe);
}

function loadRecipeEditForm(data){
  //build the recipe edit "form" when user clicks edit recipe button on show recipe view
  $.get(`/users/id/recipes/${data}.json`, function(recipe){
    $(".recipe-actions").append(`<h2>Edit ${recipe.name}</h2>
        <div class="recipe-${recipe.id}-name-box">
          Recipe Name:<br>
          <input type="text" class="recipe-name-input" placeholder="${recipe.name}"><br>
        </div>
        <div class="recipe-${recipe.id}-description-box">
          Recipe Description:<br>
          <input type="text" class="recipe-description-input" placeholder="${recipe.description}"><br>
        </div>
        <div class="recipe-${recipe.id}-calories-box">
          Recipe Calories:<br>
          <input type="number" class="recipe-calories-input" placeholder="${recipe.calories}"><br>
        </div>
        <div class="recipe-${recipe.id}-carbs-box">
          Recipe Carbs:<br>
          <input type="number" class="recipe-carbs-input" placeholder="${recipe.carbs}"><br>
        </div>
        <div class="recipe-${recipe.id}-protein-box">
          Recipe Protein:<br>
          <input type="number" class="recipe-protein-input" placeholder="${recipe.protein}"><br>
        </div>
        <div class="recipe-${recipe.id}-fats-box">
          Recipe Fats:<br>
          <input type="number" class="recipe-fats-input" placeholder="${recipe.fats}"><br>
        </div>
        <br>
        <div class="recipe-${recipe.id}-submit">
          <button class="submit-edit-recipe-button" data-button=${recipe.id}>Submit Edit</button>
        </div>
      `)
  });
}


//This still is not working need to look into when have time issue: url for patch request is not found even though it is a real url.
function updateRecipe(recipe_id){
  let recipeID = recipe_id;
  let recipeName = $('.recipe-name-input').val();
  let recipeDescription = $('.recipe-description-input').val();
  let recipeCalories = $('.recipe-calories-input').val();
  let recipeCarbs = $('.recipe-carbs-input').val();
  let recipeProtein = $('.recipe-protein-input').val();
  let recipeFats = $('.recipe-fats-input').val();
  let url = `/users/5/recipes/${recipeID}`;

  let recipeData = {id: recipeID, name: recipeName, description: recipeDescription, calories: recipeCalories, carbs: recipeCarbs, protein: recipeProtein, fats: recipeFats};

  $.ajax({
    url: url,
    type: 'patch',
    dataType: 'json',
    data: recipeData
  })
  .done(function(json){
    console.log("reicpe updated");
  })
}
