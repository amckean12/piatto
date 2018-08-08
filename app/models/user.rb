class User < ApplicationRecord
  after_create :create_profile

  # <- Start Associations->
  has_one :profile
  # <-End Associations->

  # <-Start Validations->

  # <- End Validations ->

  # <- Start Security ->
  has_secure_password
  # <- End Security ->

  # <- Start Methods ->
  # <- End Methods ->
end
