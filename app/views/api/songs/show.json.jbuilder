json.song do
  json.partial! '/api/songs/song', song: @song
end

json.artist do
  json.extract! @song.artist, :id, :name
end

json.albums do
  json.extract! @song.album, :id, :title
  json.image_url asset_path(@song.album.image)
end
