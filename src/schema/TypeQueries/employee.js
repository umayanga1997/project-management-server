const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    nic: { type: GraphQLString },
    address: { type: GraphQLString },
    jobRole: { type: GraphQLString },
  }),
});
