json.array! @songs do |song|
  json.extract! song, :id, :title
  json.artist_name song.artist.name
  json.album_title song.album.title
  json.album_cover url_for(song.album.photo)
end
