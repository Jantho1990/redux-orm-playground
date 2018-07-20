import orm from './db/orm'

const emptyDBState = orm.getEmptyState()

console.log('Empty State', emptyDBState)

const session = orm.session(emptyDBState)

console.log('Session', session)

const { Author, Book } = session

Book.create({
    name: 'The Hedegrast'
})

let orson = Author.create({
    name: 'Orson Gott Gard'
})

Book.create({
    name: 'Ender\'s Butt',
    'authors': [orson]
})

console.log('All Books', Book.all().toModelArray())

console.log('Book 1 Title', Book.withId(1).name)
console.log('Book 1 Authors', Book.withId(1).authors.toModelArray()[0].name)