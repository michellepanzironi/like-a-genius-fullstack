class AddIndexOnSublyric < ActiveRecord::Migration[5.2]
  def change
    add_index :annotations, :sublyric
  end
end
