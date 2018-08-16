class Menu < ApplicationRecord

  # <- Start Associations->
  belongs_to :user
  has_many :meals, -> { order(:date) }, inverse_of: :menu, dependent: :destroy
  has_many :recipes, through: :meals
  accepts_nested_attributes_for :meals
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
    collect_recipes
    (start_date..end_date).each do |date|
      meals.build(date: date, recipe_id: @recipes.sample)
    end
  end

  def collect_recipes
    @recipes = Recipe.all.pluck(:id)
  end
  # <- End Methods ->
end
