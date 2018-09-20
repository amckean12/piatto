Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #Root handles user login or will redirect to create a new user
  root 'welcome#landing_page'

  #Login Routes
  post '/signin', to: 'sessions#create'
  get '/auth/facebook/callback' => 'sessions#create_facebook'
  #Logout Routes
  get 'logout', to: 'sessions#destroy'


  resources :users do
    resource :profile
    resources :recipes, only: [:show, :index, :new]
  end
  #resources :profiles
  resources :recipes, except: [:show, :index, :new, :under500] do
    member do
      get :under500
    end
  end
  resources :menus
end
