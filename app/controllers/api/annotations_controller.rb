class Api::AnnotationsController < ApplicationController

  before_action :ensure_session_token

  def show
    @annotation = Annotation.find_by(params[:id])
    render :show
  end

  def create
    @annotation = Annotation.new(annotation_params)
    @song = Song.find_by(annotation_params[:song_id])
    @annotation.song = @song
    @annotation.author = current_user
    if @annoation.save
      render :show
    else
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
    params.require(:annotation).permit(:body, :lyric_substring, :song_id, :author_id)
  end

end
