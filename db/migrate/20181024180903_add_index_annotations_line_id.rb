class AddIndexAnnotationsLineId < ActiveRecord::Migration[5.2]
  def change
    add_index :annotations, :line_id
  end
end
