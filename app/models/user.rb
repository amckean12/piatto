class User < ApplicationRecord
  after_create :create_profile

  # <- Start Associations->
  has_one :profile
  has_many :menus
  has_many :recipes
  # <-End Associations->

  # <-Start Validations->
  validates :first_name, presence: {message: "You Forgot to Enter in Your First Name"}
  validates :last_name, presence: {message: "You Forgot to Enter in Your Last Name"}
  validates :email, presence: {message: "You Forgot to Enter in Your Email"},
                    uniqueness: {message: "This Email is Already Signed Up, Please Use Another"}
  # <- End Validations ->

  # <- Start Security ->
  has_secure_password
  # <- End Security ->

  # <- Start Methods ->
  def recipe_options
    @recipes = Recipe.all
    @recipes.map do |recipe|
      [ recipe.name, recipe.id]
    end
  end

  def self.find_or_create_by_omniauth(auth)
   name = auth["info"]["name"]
   first_name = name.split.first
   last_name = name.split.last
   oauth_email = auth["info"]["email"] #auth["info"]["name"]
   self.where(:email => oauth_email).first_or_create do |user|
     user.first_name = first_name
     user.last_name = last_name
     user.id = auth.extra.raw_info.id
     user.password = SecureRandom.hex
   end
 end
  # <- End Methods ->
end
