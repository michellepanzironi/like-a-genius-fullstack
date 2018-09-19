json.song do
  json.partial! '/api/songs/song', song: @song
end
json.artist @song.artist
json.album @song.album.title
json.album_cover url_for(@song.album.photo)
