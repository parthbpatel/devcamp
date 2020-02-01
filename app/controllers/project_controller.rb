class ProjectController < ApplicationController
  def index
    @projects = Project.all
    @project = Project.new
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)

    respond_to do |format|
      if @project.save
        format.js
      else
        format.json { render json: @project.errors.messages, status: :unprocessable_entity }
      end
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def chat
    @message = Message.new
    @messages = Message.order(created_at: :asc).where(project_id: params[:id])
    @project = Project.find(params[:id])
  end

  def model_info
    render 'model_info', layout: '/layouts/model_details'
  end

  private

    def project_params
      params.require(:project).permit(:name, :description, :user_id)
    end
end
