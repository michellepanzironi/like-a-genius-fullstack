json.partial! 'api/artists/artist', artist: @artist

if @songs
  json.songs do
    @songs.each do |song|
      json.set! song.id do
        json.extract! song, :id, :title, :artist_id, :album_id
      end
    end
  end
end
