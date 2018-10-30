json.array! @artists do |artist|
  json.extract! artist, :id, :name
  json.photo url_for(artist.photo)
end
