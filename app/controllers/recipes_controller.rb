class RecipesController < ApplicationController
  before_action :require_login
  before_action :set_user
  layout 'profile-layout'

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to user_recipes_path(@recipe)
    else
      render :new
    end
  end

  def index
    @recipes = Recipe.all
  end

  def show
    @recipe = Recipe.find(params[:id])
    creator = @recipe.user
    @creator = creator.first_name
  end

  def edit
    @recipe = Recipe.find(params[:id])
  end

  def update
    @recipe = Recipe.find(params[:id])

    if @recipe.update_attributes(recipe_params)
      redirect_to user_recipes_path(@recipe)
    else
      render :edit
    end
  end

  def destroy
    recipe = Recipe.find(params[:id])
    recipe.destroy
    redirect_to recipes_path(@recipe), notice: "Deleted Recipe: #{recipe.name}"
  end

  def under500
  end



  private

  def set_user
    @user = current_user
  end

  def recipe_params
    params.require(:recipe).permit(:name, :description, :calories, :carbs, :protein, :fats, :user_id)
  end

end
