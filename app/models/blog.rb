class Blog < ApplicationRecord
	is_impressionable	
  validates :title, :content, presence: true

  belongs_to :user

  scope :recents, -> { where("created_at > ?", Time.now-7.days) }
  scope :past_week, -> { where(created_at: Time.zone.now.at_beginning_of_week...Time.zone.now.at_end_of_week) }
end
