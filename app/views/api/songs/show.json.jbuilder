json.song do
  json.partial! '/api/songs/song', song: @song
  json.album_cover url_for(@song.album.photo)
  json.artist @song.artist
  json.album @song.album.title
end
json.artist @song.artist
json.album @song.album.title
