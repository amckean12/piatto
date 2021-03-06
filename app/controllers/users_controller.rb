class UsersController < ApplicationController
  layout 'profile-layout', :except => :new

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_profile_path(@user)
    else
      redirect_to new_user_path, :flash => {:error => @user.errors.messages}
    end
  end

  def index
    @users = User.all
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      redirect_to user_profile_path(@user)
    else
      render :edit
    end
  end



  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :email)
  end


end
