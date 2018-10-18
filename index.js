const Dog = require('./dog')
const Owner = require('./owner')
const PlayDate = require('./playdate')
const Database = require('./database')

const Jago=new Dog('Jago',3,'setter mix',['tennis balls', 'swimming', 'running'], ['German Sheperds', 'wrestling'])

const Buddy=new Dog('Buddy',12,'border collie',['tennis balls', 'relaxed walks'], ['big dogs'])

const Odette=new Dog('Odette',6,'Husky mix',['walking', 'exploring new areas'], ['small dogs'])

//Jago.info()

//Jago.like()

//Jago.dislike()

const Francesca = new Owner('francesca','Licherfelde', [Jago, Buddy], ['Saturday','Sunday'])

//Francesca.info()

const Elena = new Owner('Elena', 'Mitte', Odette, ['Sunday','Monday evening'])

//Elena.info()

const playdate1= new PlayDate('10-11-2018 at 10am', 'Grunewald', [Jago, Odette])

Buddy.attend(playdate1)

playdate1.info()

Database.save(playdate1)

const loadedFile = Database.load()

console.log(loadedFile)