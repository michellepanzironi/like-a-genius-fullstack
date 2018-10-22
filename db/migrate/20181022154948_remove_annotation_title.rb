class RemoveAnnotationTitle < ActiveRecord::Migration[5.2]
  def change
    remove_column :annotations, :title, :string
  end
end
