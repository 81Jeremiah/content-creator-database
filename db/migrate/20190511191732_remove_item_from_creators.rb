class RemoveItemFromCreators < ActiveRecord::Migration[5.0]
  def change
    remove_column :creators, :item, :string
  end
end
