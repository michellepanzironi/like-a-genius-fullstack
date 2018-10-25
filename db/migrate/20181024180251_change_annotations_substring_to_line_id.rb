class ChangeAnnotationsSubstringToLineId < ActiveRecord::Migration[5.2]
  def change
    remove_column :annotations, :lyric_substring
    add_column :annotations, :line_id, :integer
  end
end
