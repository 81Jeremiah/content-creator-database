class Api::CreatorsController < ApplicationController
  before_action :authenticate_user, only: [:create]

  def index
    @creators = Creator.order_by_trending
    render json: @creators.with_attached_image
  end

  def search
    @creators = Creator.search(params[:creator_name])
    render json: @creators.with_attached_image
  end

  def show
    @creator = Creator.with_attached_image.find_by(id: params[:id])

    render json: @creator
  end

  def create
    @creator = Creator.create!(creator_params)

    render json: @creator
  end

  def update
    @creator = Creator.find_by(id: params[:id])
    @creator.update(params.require(:creator).permit(:trending))

    render json: @creator

  end


  private

  def creator_params
    params.require(:creator).permit(:creator_name, :image, :trending, :platform, :category, :bio)
  end
end
