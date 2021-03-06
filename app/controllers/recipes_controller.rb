class RecipesController < ApplicationController
  before_action :require_login
  before_action :set_user
  layout 'profile-layout'

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.create(recipe_params)
    render json: @recipe, status: 201
  end

  def index
    @recipes = Recipe.all
    respond_to do |format|
      format.html {render :index}
      format.json {render json: @recipes}
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
    creator = @recipe.user
    @creator = creator.first_name
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @recipe}
    end
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
    @recipes500 = Recipe.find_under_500
  end

  def carbs_under_30
    @recipes_under_30 = Recipe.find_recipe_carbs_under_30
  end



  private

  def set_user
    @user = current_user
  end

  def recipe_params
    params.require(:recipe).permit(:name, :description, :calories, :carbs, :protein, :fats, :user_id)
  end

end
