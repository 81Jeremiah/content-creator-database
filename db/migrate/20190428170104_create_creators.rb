class CreateCreators < ActiveRecord::Migration[5.0]
  def change
    create_table :creators do |t|
      t.string :creator_name
      t.string :image
      t.integer :trending, :default => 0
      

      t.timestamps
    end
  end
end
