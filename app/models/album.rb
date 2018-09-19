# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  img_url    :string
#

class Album < ApplicationRecord

  validates :title, presence: true

  has_one_attached :photo

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artist

  has_many :songs,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Song



end
