# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

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
