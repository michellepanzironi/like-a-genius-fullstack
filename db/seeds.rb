# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# ----USERS----

User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all

guest = User.create(
  username: 'guest',
  password: 'guestlogin',
)
guest.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/katya.jpg'), filename: 'guest.jpg')
guest.save!

bootsriley = User.create(
  username: 'bootsriley',
  password: 'bootsriley',
)
bootsriley.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/bootsriley.jpg'), filename: 'bootsriley.jpg')
bootsriley.save!

katya = User.create(
  username: 'katya',
  password: 'yourdad',
)
katya.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/katya.jpg'), filename: 'katya.jpg')
katya.save!

trixie = User.create(
  username: 'trixiemattel',
  password: 'ohwowwow',
)
trixie.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/trixie.jpg'), filename: 'trixie.jpg')
trixie.save!

# ----ARTISTS----

lizzo = Artist.create(
  name: 'Lizzo',
  img_url: 'https://imgur.com/SQqOZJJ.png'
)
lizzo.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/lizzo.png'), filename: 'lizzo.png')

les_sins = Artist.create(
  name: 'Les Sins',
  img_url: 'https://imgur.com/sRi4s6k.jpg'
)
les_sins.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/les-sins.jpg'), filename: 'les-sins.jpg')
les_sins.save!

rupaul = Artist.create(
  name: 'Rupaul',
  img_url: 'https://imgur.com/349DGbc.jpg'
)
rupaul.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/rupaul.jpg'), filename: 'rupaul.jpg')
rupaul.save!

capital_cities = Artist.create(
  name: 'Capital Cities',
  img_url: 'https://imgur.com/jWFhCd2.jpg'
)
capital_cities.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/capital-cities.jpg'), filename: 'capital-cities.jpg')
capital_cities.save!

yeasayer = Artist.create(
  name: 'Yeasayer',
  img_url: 'https://imgur.com/1ktPKoZ.jpg'
)
yeasayer.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/yeasayer.jpg'), filename: 'yeasayer.jpg')
yeasayer.save!

prince = Artist.create(
  name: 'Prince',
  img_url: 'https://imgur.com/3DdiFfb.jpg'
)
prince.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/prince.jpg'), filename: 'prince.jpg')
prince.save!

lorde = Artist.create(
  name: 'Lorde',
  img_url: 'https://imgur.com/VUAhmt0.jpg'
)
lorde.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/lorde.jpg'), filename: 'lorde.jpg')
lorde.save!

we_are_scientists = Artist.create(
  name: 'We Are Scientists',
  img_url: 'https://imgur.com/jJomNLt.jpg'
)
we_are_scientists.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/we-are-scientists.jpg'), filename: 'we-are-scientists.jpg')
we_are_scientists.save!

kaytranada = Artist.create(
  name: 'KAYTRANADA',
  img_url: 'https://imgur.com/OlxWUko.jpg'
)
kaytranada.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/kaytranada.jpg'), filename: 'kaytranada.jpg')
kaytranada.save!

david_bowie = Artist.create(
  name: 'David Bowie',
  img_url: 'https://imgur.com/2JHlPja.jpg'
)
david_bowie.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/bowie.jpg'), filename: 'bowie.jpg')
david_bowie.save!

# ----ALBUMS----

let_em_say_album = Album.create(
  title: 'Let Em Say',
  artist_id: lizzo.id,
  img_url: 'https://imgur.com/FAW0TmM.jpg'
)
let_em_say_album.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/lizzo-let-em-say.jpg'), filename: 'let-em-say.jpg')
let_em_say_album.save!

michael = Album.create(
  title: 'Michael',
  artist_id: les_sins.id,
  img_url: 'https://imgur.com/NANRS7c.jpg'
)
michael.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/les-sins-michael.jpg'), filename: 'michael.jpg')
michael.save!

born_naked = Album.create(
  title: 'Born Naked',
  artist_id: rupaul.id,
  img_url: 'https://imgur.com/yFkkFLC.jpg'
)
born_naked.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/yFkkFLC.jpg'), filename: 'born-naked.jpg')
born_naked.save!

kangaroo_court = Album.create(
  title: 'Kangaroo Court',
  artist_id: capital_cities.id,
  img_url: 'https://imgur.com/myzhFXz.jpg'
)
kangaroo_court.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/capital-cities-kangaroo-court.jpg'), filename: 'kangaroo-court.jpg')
kangaroo_court.save!

odd_blood = Album.create(
  title: 'Odd Blood',
  artist_id: yeasayer.id,
  img_url: 'https://imgur.com/xuVisvo.png'
)
odd_blood.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/yeasayer-blood.png'), filename: 'odd-blood.png')
odd_blood.save!

purple_rain = Album.create(
  title: 'Purple Rain',
  artist_id: prince.id,
  img_url: 'https://imgur.com/IWygTFi.jpg'
)
purple_rain.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/prince-purple-rain.jpg'), filename: 'purple-rain.jpg')
purple_rain.save!

melodrama = Album.create(
  title: 'Melodrama',
  artist_id: lorde.id,
  img_url: 'https://imgur.com/Ln1Z2pH.png'
)
melodrama.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/lorde-melodrama.png'), filename: 'melodrama.png')
melodrama.save!

brain_thrust_mastery = Album.create(
  title: 'Brain Thrust Mastery',
  artist_id: we_are_scientists.id,
  img_url: 'https://imgur.com/8d1zNpu.jpg'
)
brain_thrust_mastery.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/we-are-scientists-brain-thrust-mastery.jpg'), filename: 'brian-thrust-mastery.jpg')
brain_thrust_mastery.save!

ninety_nine_point_nine_percent = Album.create(
  title: '99.9%',
  artist_id: kaytranada.id,
  img_url: 'https://imgur.com/HUxorRy.png'
)
ninety_nine_point_nine_percent.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/kaytranada-999.png'), filename: '999.png')
ninety_nine_point_nine_percent.save!

heroes_album = Album.create(
  title: 'Heroes',
  artist_id: david_bowie.id,
  img_url: 'https://imgur.com/4Rtifxq.png'
)
heroes_album.photo.attach(io: EzDownload.open('https://s3.amazonaws.com/like-a-genius-dev/bowie-heroes.png'), filename: 'heroes.png')
heroes_album.save!

# ----SONGS----

let_em_say_song = Song.create(
  title: 'Let ''Em Say',
  artist_id: lizzo.id,
  album_id: let_em_say_album.id,
  lyrics: "[Chorus: Lizzo]\nLet ‘em say what they gonna say\nThey gon’ feel how they gonna feel\nAnd I love it\nI love it and baby\nHey, you should too\n\n[Chorus: Caroline Smith]\nSo let ‘em say what they gonna say\nThey gonna feel how they gonna feel\nBut I love it\nI love it, baby\nHey, you should too\n\n[Verse 1: Lizzo]\nI’m just as thick as my skin is\nI feel the water rolling down my back\nPrecipitation’s so repetitive\nI read this all before\nInterrogation to my hometown\nYour comments leave me such a nasty taste\nCan’t feel the sound\nSwish all around\nA palette-cleanser for your salty mouth\n\n[Pre-Chorus]\nI know they’ll never get enough\nThey don’t get it, they don’t get it\nBut if you’re giving in then don’t you change\nCause living was the best revenge\n\n[Chorus]\n\nDon’t pay them no mind\n\n[Verse 2: Caroline Smith]\nI’m not as thick as my skin is\nTrying to stay strong\nStay tuned out of the dark but\nWhen you’re running the business\nI wish it was easy\nTrying to work like a boss but\nThey keep shaking my patience\nDon’t wanna think like a man\nOr look like a model\nI wanna look like my momma\nFive foot two and a natural woman\n\n[Pre-Chorus]\n\n[Chorus]"
)
bother = Song.create(
  title: 'Bother',
  artist_id: les_sins.id,
  album_id: michael.id,
  lyrics: "Don't, don't, don't, don't, don't, don't\nDon't bother me I'm working\nDon't bother me I'm working\nDon't bother me I'm working\nDon't bother me I'm working\nDon't bother me, working, working\nI'm working\nDon't bother me\nDon't bother me, can't you see\nDon't bother me, working, working\nI'm working\nDon't bother me\nD-d-don't bother me, can't you see\nDon't bother me working, working\nI'm working\nDon't bother me\nDon't bother me, can't you see\nDon't bother me, working, working\nI'm working\nDon't bother me\nD-d-don't bother me, can't you see\nDon't bother me, working, working\nI'm working\nDon't bother me\nDon't bother me, can't you see\nDon't bother me, working, working\nI'm working\nDon't bother me, d-d-don't bother me\nCan't you see\nD-d-don't, ya\nD-d-don't\nWorking, working\nI'm working\nDon't bother me\nD-d-don't bother me, can't you see\nDon't bother me, working, working\nI'm working\nDon't bother me\nDon't bother me, can't you see\nDon't bother me, working, working\nI'm working, ya\nDon't bother me\nD-d-don't bother me, c-can't you see\nWorking, working\nUh, uh, working, working\nUh, uh, don't bother me I'm\nWorking, working, I'm working, ya\nDon't bother me I'm, don't bother me\nCan't you see, working, working\nUh, uh, working, working\nUh, can't you see I'm working, working\nWorking, working\n\n[Instrumental Break]\n\nWorking\nWorking, working"
)
sissy_that_walk = Song.create(
  title: 'Sissy That Walk',
  artist_id: rupaul.id,
  album_id: born_naked.id,
  lyrics: "[Verse 1]\nPick myself up, turn the world on its head\nDon't forget what, don't forget what my momma said\nPeople talking (ish), since the beginning of time\nUnless they paying your bills, pay them bitches no mind\n\n[Pre-Chorus]\nAnd If I fly or if I fall\nLeast I can say I gave it all\nAnd If I fly or if I fall\nI'm on my way, I'm on my way\n\n[Chorus]\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nUh-oh\nNow sissy that walk!\n\n[Verse 2]\nBetter beware, ain't no tea ain't no shade\nBut at the same time, bitches better get out the way\nI'm a femme queen, Mother of the House of No Shame\nMy pussy is on fire, now kiss the flame\n\n[Pre-Chorus]\nAnd If I fly or if I fall\nLeast I can say, I gave it all\nAnd If I fly or if I fall\nI'm on my way, I'm on my way\n\n[Chorus]\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh\nNow sissy that walk!\n\n[Breakdown]\n\n[Pre-Chorus]\nAnd If I fly or if I fall\nLeast I can say, I gave it all\nAnd If I fly or if I fall\nI'm on my way, I'm on my way\n\n[Chorus]\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh, uh-oh\nFly, fly, fly, fly\nUh-oh\nNow sissy that walk!\n\n[Outro]\nHello"
)
stayin_alive = Song.create(
  title: 'Stayin Alive',
  artist_id: capital_cities.id,
  album_id: kangaroo_court.id,
  lyrics: "Well, you can tell by the way I use my walk\nI'm a woman's man no time to talk\nMusic loud and women warm\nI've been kicked around, since I was born\n\nAnd now it's all right, it's okay\nAnd you may look the other way\nWe can try to understand\nThe New York times' effect on man\n\nWhether you're a brother or whether you're a mother\nYou're stayin' alive, stayin' alive\nFeel the city breakin' and everybody shakin'\nStayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive\n\nWell now, I get low and I get high\nAnd if I can't get either, I really try\nGot the wings of Heaven on my shoes\nI'm a dancin' man and I just can't lose\n\nYou know it's all right, it's okay\nI'll live to see another day\nWe can try to understand\nThe New York times' effect on man\n\nWhether you're a brother or whether you're a mother\nYou're stayin' alive, stayin' alive\nFeel the city breakin' and everybody shakin'\nStayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive\n\nLife's goin' nowhere, somebody help me\nLife's goin' nowhere, somebody help me\nLife's goin' nowhere, somebody help me\nLife's goin' nowhere, somebody help me\n\nWhether you're a brother or whether you're a mother\nYou're stayin' alive, stayin' alive\nFeel the city breakin' and everybody shakin'\nStayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive\n\nWhether you're a brother or whether you're a mother\nYou're stayin' alive, stayin' alive\nFeel the city breakin' and everybody shakin'\nStayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive, stayin' alive\nAh, ha, ha, ha, stayin' alive"
)
ambling_alp = Song.create(
  title: 'Ambling Alp',
  artist_id: yeasayer.id,
  album_id: odd_blood.id,
  lyrics: "[Instrumental Intro]\n\n[Verse 1]\nNow kid, I know I haven't been a perfect man\nAnd I've avoided doing things I know I can\nBut if I've learned one thing to tattoo on my arm\nOr burn into my thumb\nIt would be that\n\n[Hook]\nYou must stick up for yourself, son\nNever mind what anybody else done\nStick up for yourself, son\nNever mind what anybody else done\n\n[Verse 2]\nOh Max Schmeling was a formidable foe\nBut Ambling Alp was, too, at least that's what I'm told\nBut if you learn one thing, you've learned it well\nIn June you must give fascists hell\nThey'll run but they can't hide\n\n[Hook]\nYou must stick up for yourself, son\nNever mind what anybody else done\nStick up for yourself, son\nNever mind what anybody else done\nStick up for yourself, son\nNever mind what anybody else done\nStick up for yourself, son\nNever mind what anybody else done\n\n[Bridge]\nAnd when those thunder clouds are crying in the skies, in the skies\nAnd when those fireflies keep shining in your eyes, in your eyes\nKeep your mind on the time, with your ass on the line\nKeep your fleet feet sliding to the side, to the side\n\n[Verse 3]\nNow, the world can be an unfair place at times\nBut your lows will have their complement of highs\nAnd if anyone should cheat you\nTake advantage of, or beat you\nRaise your head and wear your wounds with pride\n\n[Hook]\nYou must stick up for yourself, son\nNever mind what anybody else done\nStick up for yourself, son\nNever mind what anybody else done\nStick up for yourself, son\nNever mind what anybody else done\nStick up for yourself, son\nNever mind what anybody else done\n\n[Instrumental]"
)
lets_go_crazy = Song.create(
  title: 'Let''s Go Crazy',
  artist_id: prince.id,
  album_id: purple_rain.id,
  lyrics: "[Spoken Intro]\nDearly beloved\nWe are gathered here today\nTo get through this thing called 'life'\n\nElectric word, life\nIt means forever and that's a mighty long time\nBut I'm here to tell you\nThere's something else\nThe afterworld\n\nA world of never ending happiness\nYou can always see the sun, day or night\n\nSo when you call up that shrink in Beverly Hills\nYou know the one, Dr. Everything'll-Be-Alright\nInstead of asking him how much of your time is left\nAsk him how much of your mind, baby\n\nCause in this life\nThings are much harder than in the after world\nIn this life\nYou're on your own\n\nAnd if de-elevator tries to bring you down\nGo crazy (Punch a higher floor!)\n\nWoo!\n\n[Verse 1]\nIf you don't like\nThe world you're living in\nTake a look around\nAt least you got friends\nYou see I called my old lady\nFor a friendly word\nShe picked up the phone\nDropped it on the floor\n(Ah-s ah-s) is all I heard\n\n[Pre-Chorus]\nAre we gonna let de-elevator bring us down?\nOh, no lets go!\n\n[Chorus]\nLet's go crazy\nLet's get nuts\nLet's look for the purple banana\nUntil they put us in the truck, let's go!\n\n[Verse 2]\nWe're all excited\nBut we don't know why\nMaybe it's cause\nWe're all gonna die\nAnd when we do (when we do)\nWhat's it all for (what's it all for)\nYou better live now\nBefore the grim reaper come knocking on your door\n\n[Pre-Chorus]\nTell me, are we gonna let de-elevator bring us down?\nOh, no let's go!\n\n[Chorus]\nLet's go crazy\nLet's get nuts\nLook for the purple banana\nUntil they put us in the truck, let's go!\n\n[Ad lib/Instrumental break]\nC'mon baby\nLet's get nuts!\nYeah\n(Crazy)\nLet's go crazy!\n\n[Pre-Chorus]\nAre we gonna let the elevator bring us down?\nOh, no let's go!\nGo (Go crazy)\n\n[Bridge]\nI said let's go crazy (go crazy)\nLet's go (Let's go!)\nGo (Let's go!)\n\n[Verse 3]\nDr. Everything'll-Be-Alright\nWill make everything go wrong\nPills and thrills and daffodils will kill\nHang tough children\n\nHe's coming\nHe's coming\nComing\n\n[Guitar solo]\n\n[Outro]\nTake me away!"
)
green_light = Song.create(
  title: 'Green Light',
  artist_id: lorde.id,
  album_id: melodrama.id,
  lyrics: "[Verse 1]\nI do my makeup in somebody else's car\nWe order different drinks at the same bars\nI know about what you did and I wanna scream the truth\nShe thinks you love the beach, you're such a damn liar\n\n[Refrain]\nWell those great whites, they have big teeth\nHope they bite you\nThought you said that you would always be in love\nBut you're not in love no more\nDid it frighten you\nHow we kissed when we danced on the light up floor?\nOn the light up floor\n\n[Pre-Chorus]\nBut I hear sounds in my mind\nBrand new sounds in my mind\nBut honey I'll be seein' you wherever I go\nBut honey I'll be seein' you down every road\nI'm waiting for it, that green light, I want it\n\n[Chorus]\n'Cause honey I'll come get my things, but I can't let go\nI'm waiting for it, that green light, I want it\nOh, I wish I could get my things and just let go\nI'm waiting for it, that green light, I want it\n\n[Verse 2]\nSometimes I wake up in a different bedroom\nI whisper things, the city sings 'em back to you\n\n[Refrain]\nWell those rumors, they have big teeth\nHope they bite you\nThought you said that you would always be in love\nBut you're not in love no more\nDid it frighten you\nHow we kissed when we danced on the light up floor?\nOn the light up floor\n\n[Pre-Chorus]\nBut I hear sounds in my mind\nBrand new sounds in my mind\nBut honey I'll be seein' you wherever I go\nBut honey I'll be seein' you down every road\nI'm waiting for it, that green light, I want it\n\n[Chorus]\n'Cause honey I'll come get my things, but I can't let go\nI'm waiting for it, that green light, I want it\nOh, honey I'll come get my things, but I can't let go\nI'm waiting for it, that green light, I want it\nYes, honey I'll come get my things, but I can't let go\nI'm waiting for it, that green light, I want it\nOh, I wish I could get my things and just let go\nI'm waiting for it, that green light, I want it\n\n[Outro]\nI'm waiting for it, that green light, I want it\nI'm waiting for it, that green light, I want it\nI'm waiting for it, that green light, I want it\nI'm waiting for it, that green light, I want it\nI'm waiting for it, that green light, I want it\nI'm waiting for it, that green light, I want it"
)
after_hours = Song.create(
  title: 'After Hours',
  artist_id: we_are_scientists.id,
  album_id: brain_thrust_mastery.id,
  lyrics: "[Verse 1]\nThis door is always open\nThis door is always open\nNo-one has the guts to shut us out\nBut if we have to go now\nI guess there's always hope that\nSome place will be serving\nAfter Hours\n\n[Chorus]\nThis night is winding down but time means nothing\nAs always at this hour time means nothing\nOne final final round cause\nTime means nothing\nSay that you'll stay\nSay that you'll stay\n\n[Verse 2]\nWe're finally drunk enough that\nWe're finally soaking up\nThe hours that everyone else throws away\nAnd if we have to go now\nI guess there's always hope\nTomorrow night will be more of the same\n\n[Chorus]\nThis night is winding down but time means nothing\nAs always at this hour time means nothing\nOne final final round cause\nTime means nothing\nSay that you'll stay\nSay that you'll stay\nSay that you'll stay\n\n[Bridge]\nWe're all right where we're supposed to be\nWe're all right where we're supposed to be\nWe're all right where we're supposed to be (Time means nothing)\nWe're all right where we're supposed to be (Time means nothing)\n\nThis door is always open\nThis door is always open\nNo-one has the guts to shut us out\nNo-one has the guts to shut us out\n\nTime means nothing\nTime means nothing\nOne final final round cause\nTime means nothing\nSay that you'll stay\nSay that you'll stay\nSay that you'll stay"
)
bullets = Song.create(
  title: 'BULLETS',
  artist_id: kaytranada.id,
  album_id: ninety_nine_point_nine_percent.id,
  lyrics: "[Verse 1]\nI feel raindrops falling washing off my tears\nI been walking through a daydream all my years\nOh I do believe in world peace my dear\nI do\nWise women will call your name\nIf you believe in impossible things\nIf you believe if it grows from seeds to a beautiful tree\n\n[Chorus]\nSun don’t shine\nAnd we all know why\nBullets keep flying\nSo many shooting\nIn the darkest times\nThrough the darkest night\nWhat you want what you want\nSun don’t shine\nAnd we all know why\nBullets keep flying\nSo many crying\nIn the darkest night\nThrough the darkest times\nWhat you want what you want\n\n[Verse 2]\nI can feel it in the air it just grew thin\nThen the numbers they be counting coming in\nDo you believe in world peace my friend\nDo you\n\n[Chorus]\nSun don’t shine\nAnd we all know why\nBullets keep flying\nSo many shooting\nIn the darkest times\nThrough the darkest night\nWhat you want what you want\nSun don’t shine\nAnd we all know why\nBullets be flying\nSo many crying\nIn the darkest night\nThrough the darkest times\nWhat you want what you want\n\n[Outro]\nSun don’t shine\nSun don’t shine\nAnd we all know why\nAnd we all know why\nBullets be flying\nSo many shooting\nIn the darkest night\nThrough the darkest times\nWhat you want what you want"
)
heroes_song = Song.create(
  title: 'Heroes',
  artist_id: david_bowie.id,
  album_id: heroes_album.id,
  lyrics: "[Chorus]\nI, I will be king\nAnd you, you will be queen\nThough nothing, will drive them away\nWe can beat them, just for one day\nWe can be heroes, just for one day\n\n[Verse 1]\nAnd you, you can be mean\nAnd I, I'll drink all the time\n'Cause we're lovers, and that is a fact\nYes we're lovers, and that is that\n\n[Refrain]\nThough nothing, will keep us together\nWe could steal time, just for one day\nWe can be heroes, forever and ever\nWhat d'you say?\n\n[Verse 2]\nI, I wish you could swim\nLike the dolphins, like dolphins can swim\n\n[Refrain]\nThough nothing, nothing will keep us together\nWe can beat them, forever and ever\nOh we can be heroes, just for one day\n\n[Chorus]\nI, I will be king\nAnd you, you will be queen\nThough nothing, will drive them away\nWe can be heroes, just for one day\nWe can be us, just for one day\n\n[Verse 3]\nI, I can remember (I remember)\nStanding, by the wall (by the wall)\nAnd the guns, shot above our heads (over our heads)\nAnd we kissed, as though nothing could fall (nothing could fall)\n\n[Refrain]\nAnd the shame, was on the other side\nOh we can beat them, forever and ever\nThen we could be heroes, just for one day\nWe can be heroes\nWe can be heroes\nWe can be heroes, just for one day\nWe can be heroes\n\n[Outro]\nWe're nothing, and nothing will help us\nMaybe we're lying, then you better not stay\nBut we could be safer, just for one day\nOh-oh-oh-ohh, oh-oh-oh-ohh, just for one day"
)
