class Meal < ApplicationRecord
  # <- Start Associations->
  belongs_to :menu, inverse_of: :meals
  belongs_to :recipe
  # <-End Associations->

  # <-Start Validations->
  validates :date, presence: true
  validates :menu, presence: true
  validates :recipe, presence: true
  # <- End Validations ->

  # <- Start Security ->

  # <- End Security ->

  # <- Start Methods ->

  # <- End Methods ->
end
