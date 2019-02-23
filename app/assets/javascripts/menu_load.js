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
    //setting a variable that will create a JS Model Object of the most recent menu created by the user
    let currentUserMenu = new Menu(data[data.length-1])
    displayMenu(currentUserMenu);
  })
}

class Menu {
  constructor(obj){
    this.id = obj.id
    this.start_date = obj.start_date
    this.end_date = obj.end_date
    this.meals = obj.meals
  }
}

function displayMenu(data){
  let currentUserMenu = data;
  debugger;
  $(".profile-content").append(`div class="menu"`)
}