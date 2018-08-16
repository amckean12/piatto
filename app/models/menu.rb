class Menu < ApplicationRecord
  # <- Start Associations->
  belongs_to :user
  # <-End Associations->

  # <-Start Validations->
  validates :start_date, presence: true
  validates :end_date, presence: true
  validates :user, presence: true
  # <- End Validations ->

  # <- Start Security ->

  # <- End Security ->

  # <- Start Methods ->
  def build_menu
    recipe_ids = user.recipes.pluck(:id)
    (start_date..end_date).each do |date|
      unused_recipes = recipe_ids - meals.map(&:recipe_id)
      available_recipes = unused_recipes.empty? ? recipe_ids : unused_recipes
      meals.build(date: date, recipe_id: available_recipes.sample)
    end
  end

  # <- End Methods ->
end
