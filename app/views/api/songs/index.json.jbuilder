json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end

json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.partial! 'api/artists/artist', artist: artist
    end
  end
end
