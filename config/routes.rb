Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #Root handles user login or will redirect to create a new user
  root 'welcome#landing_page'

  #Login Routes
  post '/signin', to: 'sessions#create'
  get '/auth/facebook/callback' => 'sessions#create'
  #Logout Routes
  get 'logout', to: 'sessions#destroy'


  resources :users
  resources :profiles
  resources :recipes
  resources :menus
end
