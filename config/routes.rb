Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    get 'songs/newest', to: 'songs#newest'
    get 'songs/random', to: 'songs#random'
    get 'artists/newest', to: 'artists#newest'
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :songs, only: [:index, :show, :create, :update] do
      resources :comments, only: [:create]
      resources :upvotes, only: [:create, :destroy]
    end
    resources :artists
    resources :albums
    resources :annotations, only: [:show, :create]
  end

end
