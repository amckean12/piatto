class SessionsController < ApplicationController
  def new
     if current_user
       @user = current_user
       redirect_to profile_path(@user)
     else
       @user = User.new
     end
   end

  def create
    @user = User.find_by_email(params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to user_profile_path(@user)
    else
      redirect_to root_path
    end
  end

  def destroy
    if current_user
      session.delete :user_id
    end
    redirect_to '/'
  end
end
