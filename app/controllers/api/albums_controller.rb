class Api::Albums < ApplicationController

  def index
    @albums = Albums.all
    render :index
  end

  def show
    @album = find(params[:id])
    @songs = @album.songs
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
    @album = Artist.find_by(album_params)
    @album.update(album_cover_params)
    if @album.save

    else
      render json: @album.errors.full_messages, status: :unprocessable_entity
    end
  end


  private
  def album_params
    params.require(:album).permit(:title)
  end

  def album_cover_params
    params.require(:album).permit(:photo)
  end

end
