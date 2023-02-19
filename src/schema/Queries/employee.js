const { GraphQLList, GraphQLID } = require("graphql");
const EmployeeType = require("../TypeQueries/employee");
const Employee = require("../../models/Employee");

const GET_EMPLOYEES = {
  type: new GraphQLList(EmployeeType),
  resolve(parent, args) {
    return Employee.find();
  },
};

const GET_EMPLOYEE = {
  type: EmployeeType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Employee.findById(args.id);
  },
};

module.exports = { GET_EMPLOYEES, GET_EMPLOYEE };
