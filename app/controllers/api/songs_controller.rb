class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    @artists = Artist.all
    render :index
  end

  def show
    @song = Song.find(params[:id])
    @annotations = @song.annotations
    render :show
  end

  def newest
    @songs = Song.last(10)
    render :newest
  end

  def random
    random_songs = Song.all
    @songs = random_songs[0..-10].sample(1)
    render :random
  end

  def update
    @song = Song.find_by(id: params[:id])
    # @artist = @song.artist
    # @album = @song.album
    if @song.update_attributes(song_params)
      # @artist.update_attributes(artist_params)
      # @album.update_attributes(album_params)
      render :show
    else
      render json: @song.errors.full_messages, status: :unprocessable_entity
    end
  end

  def create
    if logged_in?
      @song = Song.new(song_params)
      @artist = Artist.find_or_create_by(artist_params)
      @artist.photo.attach(io: params[:artist][:photo], filename: "#{@artist.name}.jpg")
      @album = Album.find_or_create_by(album_params.merge({ artist_id: @artist.id }))
      @album.photo.attach(io: params[:album][:photo], filename: "#{@album.title}.jpg")
      @song.artist = @artist
      @song.album = @album
      if @song.save
        @artist.save
        @album.save
        render :show
      else
        artist_errors = @artist[:name].empty? ? ["Artist name cannot be blank"] : []
        album_errors = @album[:title].empty? ? ["Album title cannot be blank"] : []
        all_errors = @song.errors.full_messages + artist_errors + album_errors
        render json: all_errors, status: 422
      end
    else
      render json: ['You must be logged in to add a song'], status: 401
    end
  end

  def destroy
    @song = Song.find_by(params[:id])
    if @song.destroy
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private
  def song_params
    params.require(:song).permit(:title, :lyrics)
  end

  def artist_params
    params.require(:artist).permit(:name)
  end

  def album_params
    params.require(:album).permit(:title)
  end

end
