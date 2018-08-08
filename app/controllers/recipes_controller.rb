class RecipesController < ApplicationController
  layout "profile-layout"

  def new
    @user = current_user
    @recipe = Recipe.new
  end

  def create
  end

  def show
  end

  def index
  end

end
