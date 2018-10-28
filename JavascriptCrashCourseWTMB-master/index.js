const Dog = require('./dog')
const Owner = require('./owner')
const PlayDate = require('./playdate')
const Database = require('./database')
const Location = require('./locations')

const Jago=new Dog('Jago',3,'setter mix',['tennis balls', 'swimming', 'running'], ['German Sheperds', 'wrestling'])

const Buddy=new Dog('Buddy',12,'border collie',['tennis balls', 'relaxed walks'], ['big dogs'])

const Odette=new Dog('Odette',6,'Husky mix',['walking', 'exploring new areas'], ['small dogs'])

//Jago.info()

//Jago.ShowLikes()

//Jago.ShowDislikes()

const Francesca = new Owner('francesca','Licherfelde', [Jago, Buddy], ['Saturday','Sunday'])

//Francesca.info()

const Elena = new Owner('Elena', 'Mitte', Odette, ['Sunday','Monday evening'])

//Elena.info()

const shonebergpark = new Location('Shoneberg','Tempelhofer Weg 63-64, 10829 Berlin','bins, benches, shed, toys, agility equiments, chairs','6AM - 10PM','https://goo.gl/maps/QG9UxSVoDmo')


const playdate1= new PlayDate('10-11-2018 at 10am', 'Grunewald', [Jago, Odette])

const playdate2= new PlayDate('10-12-2018 at 12am', shonebergpark, [Buddy, Odette])

Buddy.attend(playdate1)

//playdate1.info()

Database.save(playdate1)
Database.save(playdate2)


const loadedFile = Database.load()

console.log(loadedFile)

