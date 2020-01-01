Rails.application.routes.draw do
  get 'projects', to: 'project#index'
  post 'projects', to: 'project#create'
  get 'projects/:id', to: 'project#show', as: 'project'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
