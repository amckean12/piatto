class MenusController < ApplicationController
  before_action :require_login
  before_action :set_user
  layout 'profile-layout'

  def new
    @menu = @user.menus.build(start_date: params[:start_date] || Date.today, end_date: params[:end_date] || 6.days.from_now.to_date)
    @menu.build_menu
  end

  def create
  @menu = current_user.menus.build(menu_params)
    if @menu.save
      redirect_to menu_path(@menu)
    else
      render :new
    end
  end

  def show
    @menu = @user.menus.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @menu}
    end
  end

  #Rendering every menu created by the user
  def index
    @menus = @user.menus.all
    render json: @menus
  end

  private

  def set_user
    @user = current_user
  end

  def menu_params
    params.require(:menu).permit(:start_date, :end_date, meals_attributes: [:id, :date, :recipe_id])
  end

end
