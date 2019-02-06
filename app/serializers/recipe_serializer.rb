class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :calories, :carbs, :protein, :fats, :user_id
end
