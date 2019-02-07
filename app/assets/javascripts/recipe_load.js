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
    loadRecipeContent();
  });
}


function loadRecipes(){
  let id = $(this).data("id");
  $.get(`/users/id/recipes.json`, function(recipe){
    $.each(recipe, function(key, value){
      $(".profile-content").append(`<button class="listed-recipe-link">${value.name}</button><br><br>`).data(value.id);
    });
  });
}

function loadRecipeContent(){
  alert("shes an easy loverrr");
}
