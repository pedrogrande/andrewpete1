Chile1::Application.routes.draw do
  get "benefits/index", :id => "benefits"
  match "benefits" => "benefits#index"

  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "home#index"
  devise_for :users
  resources :users
end