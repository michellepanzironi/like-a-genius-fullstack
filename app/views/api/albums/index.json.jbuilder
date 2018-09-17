@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :artist_id
  end
end
