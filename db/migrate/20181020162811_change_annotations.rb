class ChangeAnnotations < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :lyric_substring, :string
  end
end
