class Recipe < ApplicationRecord
  # <- Start Associations->
  belongs_to :user
  has_many :meals
  has_many :users, :through :meals
  # <-End Associations->

  # <-Start Validations->

  # <- End Validations ->

  # <- Start Security ->

  # <- End Security ->

  # <- Start Methods ->

  # <- End Methods ->
end
