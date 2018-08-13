class User < ApplicationRecord
  after_create :create_profile

  # <- Start Associations->
  has_one :profile
  has_many :recipes
  has_many :friendships
  has_many :friends, :through => :friendships
  # <-End Associations->

  # <-Start Validations->

  # <- End Validations ->

  # <- Start Security ->
  has_secure_password
  # <- End Security ->

  # <- Start Methods ->
  # <- End Methods ->
end
