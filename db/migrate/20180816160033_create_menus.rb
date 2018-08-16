class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
