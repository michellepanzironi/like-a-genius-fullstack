class AddColumnsToAnnotations < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :starting_char, :integer
    add_column :annotations, :ending_char, :integer
    change_column :annotations, :body, :text
  end
end
