$(document).ready(function() {
  attachMenuListeners();
});

function attachMenuListeners(){
  $("button.menu-link").on("click", function(){
    loadMenu();
  });
}

function loadMenu(){
  $.ajax({
    url: 'http://localhost:3000/menus',
    method: 'get',
    dataType: 'json'
  }).done(function(data){
    console.log("this is my data:", data)
  })
}
