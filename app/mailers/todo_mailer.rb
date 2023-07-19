class TodoMailer < ApplicationMailer
    def todo_email(todo)
        @todo = todo
        mail(to: @todo.user.email, subject: "New task has been assigned to you.")
    end
end
