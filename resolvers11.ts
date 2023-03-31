import books from './db23/books.js';
const resolvers = {
    Query: { books: () => books, },
};

export default resolvers  