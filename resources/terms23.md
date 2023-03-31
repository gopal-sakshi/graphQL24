A schema is a collection of type definitions that together define the "shape" of queries 

Resolvers tell Apollo Server how to fetch the data associated with a particular type

Passing an ApolloServer instance to the `startStandaloneServer` function:
1. creates an Express app
2. installs your ApolloServer instance as middleware
3. prepares your app to handle incoming requests