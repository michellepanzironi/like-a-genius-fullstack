class Api::ActionController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render 'api/users/show'
    else
      render json: ['User not found'], status: 404
    end
  end

  def create
    @user = User.create(user_params)
    if @user.save!
      login!(user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 421
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
