$(document).ready(function() {
  attachRecipeCreateListener();
});

function attachRecipeCreateListener(){
  $(function () {
  $('form').submit(function(event) {
    //prevent form from submitting the default way
    event.preventDefault();
    let values = $(this).serialize();
    let posting = $.post('/recipes', values);
    posting.done(function(data) {
      let recipe = data;
      debugger;
      $(".new-recipe-container").remove();
      $(".profile-content").append(`
        <div class="recipe-content">
          <h2>Name</h2>
          <p>${recipe.name}</p>
        </div>
        <div class="recipe-content">
          <h2>Description</h2>
          <p>${recipe.description}</p>
        </div>
        <div class="recipe-content">
          <h2>Calories</h2>
          <p>${recipe.calories}</p>
        </div>
        <div class="recipe-content">
          <h2>Carbs</h2>
          <p>${recipe.carbs}</p>
        </div>
        <div class="recipe-content">
          <h2>Protein</h2>
          <p>${recipe.protein}</p>
        </div>
        <div class="recipe-content">
          <h2>Fats</h2>
          <p>${recipe.fats}</p>
        </div>  `);
     });
  });
});
}
