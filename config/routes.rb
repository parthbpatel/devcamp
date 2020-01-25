Rails.application.routes.draw do
  resources :todos
  resources :blogs
  devise_for :users
  get 'message/create'

  # Project Routes
  get 'projects', to: 'project#index'
  get 'projects/:id', to: 'project#show', as: 'project'
  get 'projects/:id/chat', to: 'project#chat', as: 'project_chat'
  post 'projects', to: 'project#create'
  get 'model_info', to: 'project#model_info', as: 'model_info'
  # Project Messaging Routes (Chat)
  post 'messages', to: 'message#create'

  root 'project#index'
end
