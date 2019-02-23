$(document).ready(function() {
  attachMenuListeners();
});

function attachMenuListeners(){
  $("button.menu-link").on("click", function(){
    loadMenu();
  });
}

function loadMenu(){
  alert("Hi");
}
