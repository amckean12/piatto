class RecipesController < ApplicationController
  before_action :require_login
  before_action :set_user


  def index
    @recipes = Recipe.all
  end

  private

  def set_user
    @user = current_user
  end 
end
