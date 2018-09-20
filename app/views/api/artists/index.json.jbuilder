@artists.each do |artist|
  json.set! artist.id do
    json.partial! 'api/artists/artist', artist: artist
    json.photo url_for(artist.photo)
  end
end
