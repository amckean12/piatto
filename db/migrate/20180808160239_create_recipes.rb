class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :recipe_name
      t.string :description
      t.integer :calories
      t.integer :carbs
      t.integer :fats
      t.integer :protein
      t.integer :user_id
      t.timestamps
    end
  end
end
