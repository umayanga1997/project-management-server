const Client = require("../../models/Client");
const ClientType = require("../TypeQueries/client");
const { GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");

const CREATE_CLIENT = {
  type: ClientType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    company: { type: GraphQLString },
    mobileNo: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    var cli = new Client({
      name: args.name,
      company: args.company,
      mobileNo: args.mobileNo,
    });

    return cli.save();
  },
};
const UPDATE_CLIENT = {
  type: ClientType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLNonNull(GraphQLString) },
    company: { type: GraphQLString },
    mobileNo: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    return Client.findByIdAndUpdate(
      args.id,
      {
        $set: {
          name: args.name,
          company: args.company,
          mobileNo: args.mobileNo,
        },
      },
      { new: true, runValidators: true }
    );
  },
};
const DELETE_CLIENT = {
  type: ClientType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return Client.findByIdAndDelete(args.id);
  },
};

module.exports = { CREATE_CLIENT, UPDATE_CLIENT, DELETE_CLIENT };
