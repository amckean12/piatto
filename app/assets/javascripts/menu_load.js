$(document).ready(function() {
  attachMenuListeners();
});

const attachMenuListeners = () => {
  $("button.menu-link").on("click", () => {loadMenu()})
}

const loadMenu = () =>{
  $.ajax({
    url: 'http://localhost:3000/menus',
    method: 'get',
    dataType: 'json'
  }).done((data) => {
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
  let currentUserMenuDays = currentUserMenu.meals
  $(".profile-content").append(`<div class="menu-box">
  </div>`)
  $.each(currentUserMenuDays, (index, mealElement) => {
    //Add the mealElements to build the menu.
    $(`.menu-box`).append(`
      <div class="meal-${mealElement.date}-container">
      <div class="individual-recipe-from-menu">
        <h2>${mealElement.date}</h2>
        <h3>${mealElement.recipe.name}</h3>
        <p>${mealElement.recipe.description}</p>
      </div>
      </div>
      `);
  });
}
