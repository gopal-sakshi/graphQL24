import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import fs from 'fs';
import resolvers from '../resolvers11.js';

const typeDefs1 = `
  type Book { title: String author: String }  
  type Query { books: [Book] }
`;
const typeDefs2 = fs.readFileSync('../../schema12.graphql', { encoding: 'utf-8'});
const resolvers2 = resolvers;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers1 = {
  Query: { books: () => books, },
};

const server = new ApolloServer({
  typeDefs:typeDefs2,
  resolvers:resolvers2,
});

// // APPROACH I
// const { url } = await startStandaloneServer(server, { listen: { port: 3080 } });
// console.log(`Server listening at: ${url}`);

// APPROACH II
const url23 = await startStandaloneServer(server, { listen: { port: 3080 } });
// url23 ========> { url: 'http://localhost:3080/' }
// console.log(url23);
console.log(`Server listening at: ${url23.url}`);
