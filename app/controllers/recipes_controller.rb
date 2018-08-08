class RecipesController < ApplicationController
  layout "profile-layout"

  def new
    @user = current_user
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.create(recipe_params)
    if @recipe.save
      redirect_to recipes_path(@recipe)
    else
      redirect_to new_recipes_path
    end
  end

  def show
    @user = current_user
    @recipe = Recipe.find_by(params[:id])
    creator = User.find_by(params[@recipe.user_id])
    binding.pry
    @creator = creator.first_name
  end

  def index
    @recipes = Recipe.all
  end

  private

  def recipe_params
    params.require(:recipe).permit(:recipe_name, :description, :calories, :carbs, :protein, :fats, :user_id)
  end

end
