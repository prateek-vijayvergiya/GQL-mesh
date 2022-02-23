// import { Resolvers } from '../.mesh'
const axios = require("axios");
const { connectionFromArray } = require("graphql-relay");

const resolvers = {
  Query: {
    Corona: async (_, args) => {
      const result = await axios.get("https://data.covid19india.org/data.json");
      const data = connectionFromArray(
        result.data.cases_time_series,
        args
      );
      return {mainData: data};
    },
  },
  Mediate: {
    extraData: async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      return result.data;
    },
  },
};

module.exports = resolvers;
