// import { Resolvers } from '../.mesh'
const axios = require('axios')
const {connectionFromArray, connectionArgs} = require('graphql-relay')

const resolvers = {
  Query: {
    async corona() {
      console.log("Entering")
      const result = await axios.get('https://data.covid19india.org/data.json')
      console.log("hell")
      console.log('---------------------result------------------',result.data)
      const data = connectionFromArray(result.data.cases_time_series, connectionArgs)
      console.log('------------------------data----------------------------', data)
      return data
    }
  }
}

module.exports = resolvers
