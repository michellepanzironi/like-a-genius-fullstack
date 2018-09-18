json.album do
  json.partial! 'api/albums/album', album: @album
end
