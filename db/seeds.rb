# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# ----USERS----

User.destroy_all

guest = User.create(
  username: 'guest',
  password: 'guestlogin',
  img_url: ''
)
bootsriley = User.create(
  username: 'bootsriley',
  password: 'bootsriley',
  img_url: 'https://pbs.twimg.com/profile_images/749636414082469888/aC2LO3cR_400x400.jpg'
)

# ----ARTISTS----

lizzo = Artist.create(
  name: 'Lizzo',
  img_url: 'https://imgur.com/SQqOZJJ'
)
les_sins = Artist.create(
  name: 'Les Sins',
  img_url: 'https://imgur.com/sRi4s6k'
)
rupaul = Artist.create(
  name: 'Rupaul',
  img_url: 'https://imgur.com/349DGbc'
)
capital_cities = Artist.create(
  name: 'Capital Cities',
  img_url: 'https://imgur.com/jWFhCd2'
)
yeasayer = Artist.create(
  name: 'Yeasayer',
  img_url: 'https://imgur.com/1ktPKoZ'
)
prince = Artist.create(
  name: 'Prince',
  img_url: 'https://imgur.com/3DdiFfb'
)
lorde = Artist.create(
  name: 'Lorde',
  img_url: 'https://imgur.com/VUAhmt0'
)
we_are_scientists = Artist.create(
  name: 'We Are Scientists',
  img_url: 'https://imgur.com/jJomNLt'
)
kaytranada = Artist.create(
  name: 'KAYTRANADA',
  img_url: 'https://imgur.com/OlxWUko'
)
david_bowie = Artist.create(
  name: 'David Bowie',
  img_url: 'https://imgur.com/2JHlPja'
)

# ----ALBUMS----
let_em_say = Album.create(
  title: 'Let Em Say',
  artist_id: 1,
)
michael = Album.create(
  title: 'Michael',
  artist_id: 2,
)
