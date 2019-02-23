class MenuMealsSerializer < ActiveModel::Serializer
  attributes :id, :date, :recipe
  def recipe
    {recipe_id: self.object.recipe.id,
    name: self.object.recipe.name,
    description: self.object.recipe.description,
    calories: self.object.recipe.calories,
    carbs: self.object.recipe.carbs,
    protein: self.object.recipe.protein,
    fats: self.object.recipe.fats}
  end
end
