class Api::CreatorsController < ApplicationController

  def index
    @creators = Creator.all
    render json: @creators
  end

  def show
    @creator = Creator.find_by(id: params[:id])
  end

end
