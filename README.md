# GraphQL Contacts App

A simple Node.js application using Express, Apollo Server (GraphQL), and MongoDB (Mongoose) to manage contacts.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up MongoDB:**
   Make sure MongoDB is running locally, or update the `MONGODB_URI` in a `.env` file:
   ```env
   MONGODB_URI=mongodb://localhost:27017/graphql
   PORT=4000
   ```

3. **Start the server:**
   ```bash
   node index.js
   ```

4. **Access GraphQL Playground:**
   Open [http://localhost:4000/graphql](http://localhost:4000/graphql) in your browser.

## Example GraphQL Queries

- **Add a product:**
  ```graphql
    mutation {
    addProduct(
      name: "Phone"
      price: 123
      soldout: true
      stores: ["Me"]
    ) {
      id
      name
      description
      price
    }
  }
  ```

- **Get all products:**
  ```graphql
  query {
    products {
      id
      name
      price
    }
  }
  ```

- **Update a product:**
  ```graphql
  mutation {
    updateProduct(id: "<PRODUCT_ID>", name: "PC", description: "PC gamer", price: 123.34, soldout: false) {
      id
      name
      price
      stores
    }
  }
  ```

- **Delete a product:**
  ```graphql
  mutation {
    deleteProduct(id: "<PRODUCT_ID>") {
      id
    }
  }
  ``` 