import orm from './db/orm'

const emptyDBState = orm.getEmptyState()

console.log('Empty State', emptyDBState)

const session = orm.session(emptyDBState)

console.log('Session', session)

const { Author, Book } = session

let nobodyCares = Book.create({
    name: 'The Hedegrast'
})

console.log('First Book', nobodyCares.name)

let orson = Author.create({
    name: 'Orson Gott Gard'
})

let ender = Book.create({
    name: 'Ender\'s Butt',
    'authors': [orson]
})

console.log('All Books', Book.all().toModelArray())

console.log('Book 1 Title', ender.name)
console.log('Book 1 Authors', Book.withId(1).authors.toModelArray()[0].name)

ender.update({name: 'Ender\'s Shadow Realm'})

console.log('Book 1 Updated Title', Book.withId(1).name)

nobodyCares.delete()

console.log('Nobody Cares', Book.withId(0))