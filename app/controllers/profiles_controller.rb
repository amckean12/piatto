class ProfilesController < ApplicationController
  layout "profile-layout"
  before_action :load_profile
  before_action :require_login
  before_action :set_user


  def show
    
  end

  private

   def load_profile
     @profile = current_user.profile || current_user.build_profile
   end

   def set_user
     @user = current_user
   end

end
