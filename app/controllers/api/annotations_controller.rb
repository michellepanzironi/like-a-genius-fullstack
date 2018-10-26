class Api::AnnotationsController < ApplicationController

  def show
    @annotation = Annotation.find_by(params[:id])
    render :show
  end

  def create
    @annotation = Annotation.new(annotation_params)
    @song = Song.find_by(song_params)
    @user = User.find_by(user_params)
    @annotation.song = @song
    @annotation.author = @user
    unless @annotation.save
      render json: @annotation.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @annotation = Annotation.find_by(params[:id])
    if @annotation.destroy
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  private
  def annotation_params
    params.require(:annotation).permit(:body, :sublyric)
  end

  def song_params
    params.require(:song).permit(:title)
  end

  def user_params
    params.require(:user).permit(:username)
  end

end
