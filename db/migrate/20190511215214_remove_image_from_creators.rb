class RemoveImageFromCreators < ActiveRecord::Migration[5.2]
  def change
    remove_column :creators, :image, :string
  end
end
