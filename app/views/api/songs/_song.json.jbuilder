json.extract! song, :id, :title, :lyrics, :artist_id, :album_id
json.image_url asset_path(song.image.url)
