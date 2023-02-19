const {
  GraphQLObjectType,
  GraphQLString,  
  GraphQLID,
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    company: { type: GraphQLString },
    mobileNo: { type: GraphQLString },
  }),
});
