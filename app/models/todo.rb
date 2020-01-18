class Todo < ApplicationRecord
  validates :title, :details, presence: true
  
  belongs_to :user
end
