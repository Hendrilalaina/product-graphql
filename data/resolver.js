const Contact = require('../models/Contact');
const Product = require('../models/Product')

const resolvers = {
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

    product: async ({ id }) => await Product.findById(id),
    products: async () => await Product.find(),
    addProduct: async ({ name, description, price, soldout, stores }) => {
      const product = new Product({name, description, price, soldout, stores});
      return await product.save();
    },
    updateProduct: async ({ id, name, description, price, soldout, stores }) => {
      return await Product.findByIdAndUpdate(
        id,
        { $set: { name, description, price, soldout, stores }},
        { new: true} 
      );
    },
    deleteProduct: async ({ id }) => {
      return await Product.findByIdAndDelete(id);
    }
};

module.exports = { resolvers };