import { fk, many, attr, Model } from 'redux-orm'

class Publisher extends Model {
    
    static get modelName() {
        return 'Publisher'
    }

    static get fields() {
        return {
            id: attr(), // good practice to declare this
            name: attr(),
            books: many('Book'),
        }
    }
    
    toString() {
        return `Publisher: ${this.name}`
    }
}

export default Publisher