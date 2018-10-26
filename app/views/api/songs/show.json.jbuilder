json.song do
  json.partial! '/api/songs/song', song: @song
  json.album_cover url_for(@song.album.photo)
  json.artist @song.artist
  json.album @song.album.title
end
json.artist @song.artist
json.album @song.album.title

if @annotations
  json.annotations do
    @annotations.each do |annotation|
      json.set! annotation.id do
        json.extract! annotation, :id, :sublyric, :body, :author_id, :song_id
      end
    end
  end
end
