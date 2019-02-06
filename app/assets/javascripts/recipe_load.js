$(document).ready(function() {
  attachListeners();
});

function attachListeners(){
  $(".recipe-link").on("click", function(){
    loadRecipes();
  });
}


function loadRecipes(){
}
