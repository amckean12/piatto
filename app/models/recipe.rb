class Recipe < ApplicationRecord
  # <- Start Associations->
  belongs_to :user
  # <-End Associations->

  # <-Start Validations->
  validates :name, presence: true, uniqueness: {scope: :user_id}
  validates :description, presence: true
  validates :calories, presence: true
  validates :carbs, presence: true
  validates :protein, presence: true
  validates :fats, presence: true
  validates :user, presence: true
  # <- End Validations ->

  # <- Start Security ->

  # <- End Security ->

  # <- Start Methods ->
  # <- End Methods ->
end
