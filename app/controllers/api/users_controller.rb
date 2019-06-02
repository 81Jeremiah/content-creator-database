class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update]

  def index
    @users = User.all
    render json: @users
  end

  def create
      user = User.new({username: params[:username], password: params[:password], email: params[:email]})
      if user.save
        render json: { user: user }
      else
        render json: {error: user.errors.full_messages}
      end
  end

  def show
    render json: @user
  end

  def find
    @user = User.find_by(email: params[:user][:email])

    if @user

      render json: @user

    else
      @errors = @user.errors.full_messages
      render json: @errors
    end
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
      params.permit :auth, :user_token
  end

end
