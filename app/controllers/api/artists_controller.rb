class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render :index
  end

  def show
    @artist = find(params[:id])
    @songs = @artist.songs
    @albums = @artist.albums
    render :show
  end

  def create
  end

  def update
    @artist = Artist.find_by(artist_params)
    @artist.update(artist_photo_params)
    if @artist.save

    else
      render json: @artist.errors.full_messages, status: :unprocessable_entity
    end
  end

  def edit
    @artist = Artist.find(params[:id])
  end

  private
  def artist_params
    params.require(:artist).permit(:name)
  end

  def artist_photo_params
    params.require(:artist).permit(:img_url)
  end

end
