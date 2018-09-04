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
  # <- End Methods ->
end
