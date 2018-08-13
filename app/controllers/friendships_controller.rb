class FriendshipsController < ApplicationController
  layout "profile-layout"

  def new
    @user = current_user
    @users = User.all
  end


  def create
    @user = current_user
    @friendship = @user.friendships.build(:friend_id => params[:friend_id])
    if @friendship.save
      redirect_to profile_path(@user)
    else
      render :action => 'new'
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    redirect_to profile_path(@user)
  end

  def index
    @user = current_user
    @friends = @user.friends.all

  end




end
