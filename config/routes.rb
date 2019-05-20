Rails.application.routes.draw do
 namespace :api do
   get  'creators/search' => 'creators#search'
   resources :creators, :users
   post 'user_token' => 'user_token#create'
   post 'find_user' => 'users#find'

 end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
