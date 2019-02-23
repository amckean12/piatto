class MenuSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date
  has_many :meals
end
