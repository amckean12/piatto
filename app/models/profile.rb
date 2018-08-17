class Profile < ApplicationRecord
  belongs_to :user
  has_many :menus, through: :user
end
