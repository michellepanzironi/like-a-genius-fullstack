json.extract! song, :id, :title, :lyrics, :artist_id, :album_id
json.artist song.artist
json.album song.album.title
json.album_cover song.album.img_url
