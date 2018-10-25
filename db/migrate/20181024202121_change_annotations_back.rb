class ChangeAnnotationsBack < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :sublyric, :string
    remove_column :annotations, :line_id, :integer
  end
end
