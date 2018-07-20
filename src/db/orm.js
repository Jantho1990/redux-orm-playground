import { ORM } from 'redux-orm'
import { Book, Author, Publisher } from './models'

const orm = new ORM()
orm.register(Author, Book, Publisher)

export default orm