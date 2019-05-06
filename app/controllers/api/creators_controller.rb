class Api::CreatorsController < ApplicationController

  def index
    @creators = Creator.all
    render json: @creators
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
    params.require(:creator).permit(:creator_name, :image, :platform, :bio, videos:[], categories: [], collabsWith: [])
  end
end
