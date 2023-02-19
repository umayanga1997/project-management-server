const ClientType = require("../TypeQueries/client");
const { GraphQLList, GraphQLID } = require("graphql");
const Client = require("../../models/Client");

const GET_CLIENTS = {
  type: GraphQLList(ClientType),
  resolve(parent, args) {
    return Client.find();
  },
};

const GET_CLIENT = {
  type: ClientType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Client.findById(args.id);
  },
};

module.exports = { GET_CLIENTS, GET_CLIENT };

// 63f05154ea918af71b4ead7b
// 63f05241357acf8d98bbc2c9

// 63ee4da10d3ad5d110ffe7e1
