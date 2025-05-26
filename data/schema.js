const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Contact {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type Product {
    id: ID!
    name: String
    description: String
    price: Float
    soldout: Boolean
    stores: [String]!
  }

  type Query {
    contacts: [Contact]
    contact(id: ID!): Contact
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    addContact(name: String!, email: String!, phone: String!): Contact
    updateContact(id: ID!, name: String, email: String, phone: String): Contact
    deleteContact(id: ID!): Contact

    addProduct(name: String!, description: String, price: Float!, soldout: Boolean!, stores: [String]): Product
    updateProduct(id: ID!, name: String, description: String, price: Float, soldout: Boolean, stores: [String]): Product  
    deleteProduct(id: ID!): Product
  }
`);

module.exports = { schema }; 