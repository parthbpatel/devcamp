class Blog < ApplicationRecord
	is_impressionable	
  validates :title, :content, presence: true

  belongs_to :user
end
