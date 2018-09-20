json.artist do
  json.partial! 'api/artists/artist', artist: @artist
  json.photo url_for(@artist.photo)
end

if @songs
  json.songs do
    @songs.each do |song|
      json.set! song.id do
        json.extract! song, :id, :title, :artist_id, :album_id
        json.album_cover url_for(song.album.photo)
      end
    end
  end
end
