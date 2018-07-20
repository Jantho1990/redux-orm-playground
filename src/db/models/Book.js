import {fk, many, attr, Model} from 'redux-orm'

class Book extends Model {
    toString() {
        return `Book: ${this.name}`
    }
}
Book.modelName = 'Book'

Book.fields = {
    id: attr(), // good practice to declare this
    name: attr(),
    authors: many('Author'),
    publisher: fk('Publisher')
}

export default Book