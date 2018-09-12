class CreateAnnotations < ActiveRecord::Migration[5.1]
  def change
    create_table :annotations do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :song_id, null: false
      t.string :body, null: false

      t.timestamps
    end
  end
end
