class MessageController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      respond_to do |format|
        format.js
      end
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :project_id)
  end
end
