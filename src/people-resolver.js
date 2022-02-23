const peopleData = require("./fake-data.json");
const { connectionFromArray } = require("graphql-relay");

const resolvers = {
  Query: {
    People(_, args) {
      return connectionFromArray(peopleData, args);
    },
  },
};

module.exports = resolvers;
