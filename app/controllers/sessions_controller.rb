class SessionsController < ApplicationController
  def new
     if current_user
       @user = current_user
       redirect_to user_profile_path(@user)
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
      redirect_to root_path, :flash => {:message => "Please enter an email or password"}
    end
  end

  def create_facebook
    if auth = request.env["omniauth.auth"]
      @user = User.find_or_create_by_omniauth(auth)
      session[:user_id] = @user.id
      redirect_to user_profile_path(@user)
    else
      redirect_to root_path, :flash => {:message => "Unable to Authenticate From Facebook"}
    end
  end


  def destroy
    if current_user
      session.delete :user_id
    end
    redirect_to '/'
  end
end
