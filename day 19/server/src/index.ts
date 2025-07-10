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
  Mutation:{
    addBook:(_:any, {bookName, author, publishedYear, price}:{bookName:string, author:string, publishedYear:number, price:number})=>{
        const newBook = {bookName, author, publishedYear, price}
        books.push(newBook)
        return newBook
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

const startServer = async () => {
  await server.start(); // Await the server start

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server is running at http://localhost:4000/graphql`);
  });
};

startServer();
