const { buildSchema } = require('graphql');
const Contact = require('./models/Contact');

const schema = buildSchema(`
  type Contact {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type Query {
    contacts: [Contact]
    contact(id: ID!): Contact
  }

  type Mutation {
    addContact(name: String!, email: String!, phone: String!): Contact
    updateContact(id: ID!, name: String, email: String, phone: String): Contact
    deleteContact(id: ID!): Contact
  }
`);

const root = {
  contacts: async () => await Contact.find(),
  contact: async ({ id }) => await Contact.findById(id),
  addContact: async ({ name, email, phone }) => {
    const contact = new Contact({ name, email, phone });
    return await contact.save();
  },
  updateContact: async ({ id, name, email, phone }) => {
    return await Contact.findByIdAndUpdate(
      id,
      { $set: { name, email, phone } },
      { new: true }
    );
  },
  deleteContact: async ({ id }) => {
    return await Contact.findByIdAndDelete(id);
  },
};

module.exports = { schema, root }; 