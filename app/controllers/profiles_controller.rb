class ProfilesController < ApplicationController

  before_action :load_profile

  def show
    @user = current_user
  end

  private

   def load_profile
     @profile = current_user.profile || current_user.build_profile
   end
end
