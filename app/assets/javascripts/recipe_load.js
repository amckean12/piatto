$(document).ready(function() {
  attachRecipeListeners();
});

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

  $(".profile-content").on('click', ".visit-recipe-link", function(){
    let data = $.parseJSON($(this).attr('data-button'));
    createRecipePage(data);
  });

  $(".profile-content").on('click', ".recipe-edit-button", function(){
    let data = $.parseJSON($(this).attr('data-button'));
    loadRecipeEditForm(data);
  });

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
  //pulling from api
  $.get(`/users/id/recipes/${recipeID}.json`, function(recipe){
    //adding recipe description from show api to recipe container
    $(`.recipe-${recipe.id}-container`).append(`<div class="recipe-contents">
        <p>Description: ${recipe.description}</p>
        <div class="visit-recipe-${recipe.id}-container">
          <button class="visit-recipe-link" data-button="${recipe.id}">Visit Recipe Page</button>
        </div>
        <br></br>
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
    <div class="recipe-actions">
      <button class="recipe-edit-button" data-button="${recipe.id}">Edit Recipe</button>
    </div>
    </div>`)
  })
}

function loadRecipeEditForm(data){
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

function updateRecipe(recipe_id){
  let recipeID = recipe_id;
  let recipeName = $('.recipe-name-input').val();
  let recipeDescription = $('.recipe-description-input').val();
  let recipeCalories = $('.recipe-calories-input').val();
  let recipeCarbs = $('.recipe-carbs-input').val();
  let recipeProtein = $('.recipe-protein-input').val();
  let recipeFats = $('.recipe-fats-input').val();

  let recipeData = {id: recipeID, name: recipeName, description: recipeDescription, calories: recipeCalories, carbs: recipeCarbs, protein: recipeProtein, fats: recipeFats};

  $.ajax({
    url: `/users/5/recipes/${recipeID}`,
    type: 'patch',
    dataType: 'json',
    data: recipeData
  })
}
