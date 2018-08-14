class User < ApplicationRecord
  after_create :create_profile

  # <- Start Associations->
  has_one :profile
  # <-End Associations->

  # <-Start Validations->
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  # <- End Validations ->

  # <- Start Security ->
  has_secure_password
  # <- End Security ->

  # <- Start Methods ->
  # <- End Methods ->
end
