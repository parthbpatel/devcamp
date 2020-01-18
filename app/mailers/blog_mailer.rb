class BlogMailer < ApplicationMailer
  def blog_email(blog)
    @blog = blog
    User.find_each do |user|
      mail(to: user.email, subject: 'New blog.')
    end
  end
end
