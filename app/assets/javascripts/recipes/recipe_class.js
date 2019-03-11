class Recipe{

  //Builds a recipe instance
  constructor(obj){
    this.id = obj.id
    this.name = obj.name
    this.description = obj.description
    this.calories = obj.calories
    this.carbs = obj.carbs
    this.protein = obj.protein
    this.fats = obj.fats
  }

  //Displays a recipe instance when clicked on
  displayRecipe(recipe){
    $(".loaded-recipes").remove();
    $(".profile-content").append(`<div class="recipe-${this.id}-container">
      <button class="edit-recipe-button" data-button=${this.id}>Edit Recipe</button>
    </div>`);
    $(`.recipe-${this.id}-container`).append(`
      <div class="recipe-content">
        <h2>Name</h2>
        <p>${this.name}</p>
      </div>
      <div class="recipe-content">
        <h2>Description</h2>
        <p>${this.description}</p>
      </div>
      <div class="recipe-content">
        <h2>Calories</h2>
        <p>${this.calories}</p>
      </div>
      <div class="recipe-content">
        <h2>Carbs</h2>
        <p>${this.carbs}</p>
      </div>
      <div class="recipe-content">
        <h2>Protein</h2>
        <p>${this.protein}</p>
      </div>
      <div class="recipe-content">
        <h2>Fats</h2>
        <p>${this.fats}</p>
      </div>  `);
    }

    displayRecipeEditForm(recipe){
      alert("This is working");
      $(".profile-content").append(`<div class="edit-recipe-container"></div>`);
    }
}
