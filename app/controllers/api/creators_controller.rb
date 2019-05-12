class Api::CreatorsController < ApplicationController

  def index
    @creators = Creator.all
    render json: @creators
  end

  def show
    @creator = Creator.with_attached_image.find_by(id: params[:id])
    
    render json: @creator
  end

  def create
    @creator = Creator.create!(creator_params)

    render json: @creator
  end

  private

  def creator_params
    params.require(:creator).permit(:creator_name, :image)
  end
end
