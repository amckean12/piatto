# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: 'John', last_name: "Smith", email: "jsmith@me.com", password: "test")
Profile.create(user_id: 1)

Recipe.create(name: 'Street Tacos', description: 'Tortilla-Chicken-Pico-Cheese-Avacado', calories: 230, carbs: 75, protein: 45, fats: 18, user_id: 2)
Recipe.create(name: 'Bar Burger', description: 'Bun-Beef-Tomato-Lettuce-Onion-Cheese-Bacon', calories: 400, carbs: 100, protein: 60, fats: 30, user_id: 2)
Recipe.create(name: 'Pepperoni Pizza', description: 'Crust-Tomato Sauce-Cheese-Pepperoni', calories: 300, carbs: 75, protein: 10, fats: 18, user_id: 2)
Recipe.create(name: 'Ribs', description: 'Ribs-BBQ Sauce', calories: 500, carbs: 0, protein: 70, fats: 18, user_id: 2)
Recipe.create(name: 'Omellete', description: 'Eggs-Cheese-Peppers-Bacon', calories: 400, carbs: 20, protein: 45, fats: 30, user_id: 2)
Recipe.create(name: 'Burrito', description: 'Tortilla-Chicken-Pico-Cheese-Avacado-Sour Cream', calories: 230, carbs: 75, protein: 45, fats: 18, user_id: 2)
Recipe.create(name: 'Ice Cream', description: 'Ice Cream', calories: 600, carbs: 75, protein: 45, fats: 18, user_id: 2)
