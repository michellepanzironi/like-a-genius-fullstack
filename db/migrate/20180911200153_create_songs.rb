class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.integer :album_id, null: false
      t.string :lyrics, null: false

      t.timestamps
    end
    add_index :songs, :title
    add_index :songs, :artist_id
    add_index :songs, :album_id
  end
end
