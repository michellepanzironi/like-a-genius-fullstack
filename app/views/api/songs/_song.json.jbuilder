json.extract! song, :id, :title, :lyrics, :artist_id, :album_id
json.artist song.artist.name
json.album song.album.title
