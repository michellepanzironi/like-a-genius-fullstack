json.album do
  json.partial! 'api/albums/album', album: @album
end

if @songs
  json.songs do
    @songs.each do |song|
      json.set! song.id do
        json.extract! song, :id, :title, :artist_id
      end
    end
  end
end
