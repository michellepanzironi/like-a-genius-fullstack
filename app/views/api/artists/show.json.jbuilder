json.artist do
  json.partial! 'api/artists/artist', artist: @artist
end

if @songs
  json.songs do
    @songs.each do |song|
      json.set! song.id do
        json.extract! song, :id, :title, :artist_id, :album_id
      end
    end
  end
end

if @albums
  json.albums do
    @albums.each do |album|
      json.set! album.id do
        json.extract! album, :id, :title, :artist_id
      end
    end
  end
