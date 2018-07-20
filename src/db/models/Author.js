import { fk, many, attr, Model } from 'redux-orm'

class Author extends Model {

    static get modelName() {
        return 'Author'
    }
    
    static get fields() {
        return {
            id: attr(), // good practice to declare this
            name: attr(),
            books: many('Book'),
        }
    }
    
    toString() {
        return `Author: ${this.name}`
    }
}

// Author.modelName = 'Author'

/* Author.fields = {
    id: attr(), // good practice to declare this
    name: attr(),
    books: many('Book', 'authors'),
} */

export default Author