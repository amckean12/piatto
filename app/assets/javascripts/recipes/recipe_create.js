$(document).ready(function() {
  attachRecipeCreateListener();
});

function attachRecipeCreateListener(){
  $(".recipe-create-link").on("click", function(){
    displayNewRecipeForm();
  });

  $(".profile-content").on('click', ".create-recipe-submission-button", function(){
    submitNewRecipe();
  });

}

function displayNewRecipeForm(){
  $(".profile-content").append(`<h1>Create a New Recipe</h1>
    <div class="recipe-form-group">
      Recipe Name:<br>
      <input type="text" class="recipe-name-form" placeholder="Name"><br>
    </div>
    <div class="recipe-form-group">
      Recipe Description:<br>
      <input type="text" class="recipe-description-input" placeholder="description"><br>
    </div>
    <div class="recipe-form-group">
      Recipe Calories:<br>
      <input type="number" class="recipe-calories-input" placeholder="calories"><br>
    </div>
    <div class="recipe-form-group">
      Recipe Carbs:<br>
      <input type="number" class="recipe-carbs-input" placeholder="carbs"><br>
    </div>
    <div class="recipe-form-group">
      Recipe Protein:<br>
      <input type="number" class="recipe-protein-input" placeholder="protein"><br>
    </div>
    <div class="recipe-form-group">
      Recipe Fats:<br>
      <input type="number" class="recipe-fats-input" placeholder="fats"><br>
    </div>
    <br>
      <button class="create-recipe-submission-button" data-button="Hello">Submit Recipe</button>
    `)
}

function submitNewRecipe(){
  let recipeName = $('.recipe-name-form').val();
  let recipeDescription = $('.recipe-description-input').val();
  let recipeCalories = $('.recipe-calories-input').val();
  let recipeCarbs = $('.recipe-carbs-input').val();
  let recipeProtein = $('.recipe-protein-input').val();
  let recipeFats = $('.recipe-fats-input').val();

  let recipeData = {name: recipeName, description: recipeDescription, calories: recipeCalories, carbs: recipeCarbs, protein: recipeProtein, fats: recipeFats};

  let url = `recipes.json`;

  $.ajax({
    url: url,
    type: "POST",
    dataType: 'json',
    data: recipeData
  })
  .done(function(json){
    console.log("recipe updated");
  })
}
