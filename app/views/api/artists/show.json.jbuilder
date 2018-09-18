json.artist do
  json.partial! 'api/artists/artist', artist: @artist
end
