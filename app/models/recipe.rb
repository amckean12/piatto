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

  # <- Start Scope Queries ->
  def self.find_under_500
    where('calories <= ?', 500)
  end

  def self.find_recipe_carbs_under_30
    where("carbs <= ?", 30)
  end
  # <- End Scope Queries ->


  # <- Start Security ->

  # <- End Security ->

  # <- Start Methods ->
  # <- End Methods ->
end
