class Api::CreatorsController < ApplicationController

  def index
    @creators = Creator.all
    render json: @creators.with_attached_image
  end

  def show
    @creator = Creator.find_by(id: params[:id])
    render json: @creator
  end

  def create
    @creator = Creator.create(creator_params)
    render json: @creator
  end

  private

  def creator_params
    params.require(:creator).permit(:creator_name, :platform, :bio, :image, videos:[], categories: [], collabsWith: [])
  end
end
