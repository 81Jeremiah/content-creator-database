class CreateCreatorCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :creator_categories do |t|
      t.belongs_to :creator, index: true, foreign_key: true
      t.belongs_to :category, index: true, foreign_key: true

      t.timestamps
    end
  end
end
