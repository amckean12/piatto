$(document).ready(function() {
  attachListeners();
});

function attachListeners(){
  $(".recipe-link").on("click", function(){
    loadRecipes();
  });
}


function loadRecipes(){
  let id = $(this).data("id");
  $.get(`/users/id/recipes.json`, function(recipe){
    $.each(recipe, function(key, value){
      alert(key + ": " + value.name);
    });
  });
}
