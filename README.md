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
   MONGODB_URI=mongodb://localhost:27017/graphqlcontacts
   PORT=4000
   ```

3. **Start the server:**
   ```bash
   node index.js
   ```

4. **Access GraphQL Playground:**
   Open [http://localhost:4000/graphql](http://localhost:4000/graphql) in your browser.

## Example GraphQL Queries

- **Add a contact:**
  ```graphql
  mutation {
    addContact(name: "John Doe", email: "john@example.com", phone: "1234567890") {
      id
      name
      email
      phone
    }
  }
  ```

- **Get all contacts:**
  ```graphql
  query {
    contacts {
      id
      name
      email
      phone
    }
  }
  ```

- **Update a contact:**
  ```graphql
  mutation {
    updateContact(id: "<CONTACT_ID>", name: "Jane Doe") {
      id
      name
      email
      phone
    }
  }
  ```

- **Delete a contact:**
  ```graphql
  mutation {
    deleteContact(id: "<CONTACT_ID>") {
      id
    }
  }
  ``` 