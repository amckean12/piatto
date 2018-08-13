Rails.application.routes.draw do
  get 'friendships/create'
  get 'friendships/destroy'
  get 'friendships/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #Root handles user login or will redirect to create a new user
  root 'welcome#landing_page'

  #Login Routes
  post '/signin', to: 'sessions#create'
  #Logout Routes
  get 'logout', to: 'sessions#destroy'


  resources :users
  resources :profiles
  resources :recipes
end
