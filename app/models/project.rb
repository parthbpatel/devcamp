class Project < ApplicationRecord
  validates :name, :description, presence: true

  belongs_to :user
  has_many :messages, dependent: :delete_all
end
