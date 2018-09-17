json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :artist_id, :album_id
    end
  end
end

json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name
    end
  end
end

json.albums do
  @Albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :name
    end
  end
end
