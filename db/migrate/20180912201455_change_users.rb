class ChangeUsers < ActiveRecord::Migration[5.1]
  def change
    change_column(:users, :email, :string, null: true)
    change_column(:users, :img_url, :string, null: true)
  end
end
