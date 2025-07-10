# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## DAY 19

### 🚀 GraphQL & Apollo Exploration

Today, I explored **GraphQL** concepts and implemented a simple **Apollo Server** using Express. I also fetched real data from the **SpaceX GraphQL API** to understand how GraphQL queries work in real-world APIs.

---

### 📘 Main Concepts in GraphQL & Apollo

#### **1. GraphQL Basics**

- **Query**: To fetch data from the server.
- **Mutation**: To add, update, or delete data on the server.
- **Subscription**: For real-time updates (not covered today, but noted for future).

#### **2. Apollo Server & Client**

- **Apollo Server**: A powerful tool to define schema and resolvers using GraphQL and expose them via an HTTP endpoint.
- **Apollo Client**: A React-friendly GraphQL client that makes querying and caching easier.

#### **3. GraphQL Schema**

- **Types**: Used to define the structure of data (e.g., `Book` type).
- **Queries**: Used to get the list or individual data (like `books`, `book`).
- **Mutations**: Used to change the data (like `addBook`).
- **Resolvers**: Functions that handle the actual logic for fetching and returning data.

#### **4. Apollo Server Setup**

- `typeDefs`: Defines GraphQL types, queries, and mutations using the `gql` template literal.
- `resolvers`: Contains the functions to resolve the defined queries/mutations.
- **Express Integration**: Apollo Server is mounted on an Express server.

#### **5. Apollo Client Setup**

- `ApolloProvider`: Wraps the app to provide context.
- `useQuery`, `useMutation`: Hooks for performing GraphQL operations from the frontend.

#### **6. TypeScript Integration**

- Type safety for both the server and client.
- Interfaces help define the data shape clearly.

#### **7. Benefits of GraphQL**

- Request only the required data.
- Avoid over-fetching and under-fetching.
- Single endpoint for all operations.

---

### 🧪 Project: Apollo Server for Book Store

I created a simple GraphQL server using **Apollo Server** and **Express**. Below is the code snippet for setting up types, resolvers, and the server:

```ts
import { ApolloServer, gql } from "apollo-server-express";
import express from "express";

const books = [
  {
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    price: 10.99,
  },
  {
    bookName: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    price: 8.99,
  },
  {
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    price: 12.99,
  },
];

const typeDefs = gql`
  type Book {
    bookName: String
    author: String
    publishedYear: Int
    price: Float
  }

  type Query {
    books: [Book]
    book(bookName: String!): Book
  }

  type Mutation {
    addBook(
      bookName: String!
      author: String!
      publishedYear: Int!
      price: Float!
    ): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, { bookName }: { bookName: String }) =>
      books.find((book) => book.bookName === bookName),
  },
  Mutation: {
    addBook: (
      _: any,
      { bookName, author, publishedYear, price }: { bookName: string; author: string; publishedYear: number; price: number }
    ) => {
      const newBook = { bookName, author, publishedYear, price };
      books.push(newBook);
      return newBook;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server running at http://localhost:4000/graphql`);
  });
};

startServer();
```
