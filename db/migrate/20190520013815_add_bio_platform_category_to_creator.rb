class AddBioPlatformCategoryToCreator < ActiveRecord::Migration[5.2]
  def change
    add_column :creators, :platform, :string
    add_column :creators, :category, :string
    add_column :creators, :bio, :text
  end
end
