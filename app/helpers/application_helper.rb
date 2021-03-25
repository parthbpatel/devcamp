module ApplicationHelper
  def pretty_datetime(time)
    time.strftime("%d/%m/%Y %I:%M %p")
  end
end
