# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  lyrics     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord

  validates :title, :artist_id, :album_id, :lyrics, presence: true

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artist

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album

  has_many :annotations,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Annotation

  def self.sample(n)
    Song.all.sample(n)
  end

  def self.order
    Song.order(created_at: :asc)
  end

  def self.endmost(n)
    Song.all.only(:order).from(all.reverse_order.limit(n), table_name)
  end

  def self.recent(n)
    Song.all.order.endmost(n)
  end

end
