const allRecipes = [];

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
    if (!allRecipes.find((recipe)=>recipe.id === this.id)){
      allRecipes.push(this);
    }
  }

  //Displays a recipe instance when clicked on
  displayRecipe(){
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

    buildRecipeButton() {
      return `<div class="recipe-${this.id}-container"><button class="listed-recipe-link" data-button="${this.id}">${this.name}</button></div>`;
    }

    // displayRecipeEditForm(recipe){
    //   alert("This is working");
    //   $(".profile-content").append(`<div class="edit-recipe-container"></div>`);
    // }
}
