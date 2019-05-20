class Creator < ApplicationRecord
  has_one_attached :image

  scope :order_by_trending, -> {order(trending: :desc).limit(9)}
  scope :search, ->(query) {where( 'creator_name LIKE ?', "%#{query}%")}
  # def self.search(query)
  #   where('creator_name LIKE ?', "%#{query}%")
  # end
 end
