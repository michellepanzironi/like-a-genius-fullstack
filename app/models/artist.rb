# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  img_url    :string
#

class Artist < ApplicationRecord

  validates :name, presence: true

  has_one_attached :photo

  has_many :songs,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Song

  has_many :albums,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Album

end
