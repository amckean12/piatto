class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to profile_path(@user)
    else
      redirect_to new_user_path
    end
  end

  def index
    @users = User.all
  end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :email)
  end


end
