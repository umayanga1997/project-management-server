const Client = require("../../models/Client");
const Employee = require("../../models/Employee");
const EmployeeType = require("./employee");
const ClientType = require("./client");
const moment = require("moment");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    projectName: { type: GraphQLString },
    createDate: {
      type: GraphQLString,
      resolve(parent, args) {
        return moment(parent.createDate).utc().format("YYYY-MM-DD");
      },
    },
    dueDate: {
      type: GraphQLString,
      resolve(parent, args) {
        return moment(parent.dueDate).utc().format("YYYY-MM-DD");
      },
    },
    employees: {
      type: new GraphQLList(EmployeeType),
      async resolve(parent, args) {
        const dataArray = [];
        for (const element of parent.employees) {
          const data = await Employee.findById(element);
          if (data) dataArray.push(data);
        }
        return dataArray;
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      async resolve(parent, args) {
        const dataArray = [];
        for (const element of parent.clients) {
          const data = await Client.findById(element);
          if (data) dataArray.push(data);
        }
        return dataArray;
      },
    },
    comment: {
      type: GraphQLString,
    },
  }),
});
