class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    @songs = @artist.songs
    @albums = @artist.albums
    render :show
  end

  def create
    @artist = Artist.find_or_create_by(artist_params)
    @artist.update(artist_photo_params)
    unless @artist.save
      render json: @artist.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
  end

  def edit
    @artist = Artist.find(params[:id])
  end

  private
  def artist_params
    params.require(:artist).permit(:name)
  end

  def artist_photo_params
    params.require(:artist).permit(:photo)
  end

end
