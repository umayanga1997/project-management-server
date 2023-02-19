const { GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");
const EmployeeType = require("../TypeQueries/employee");
const Employee = require("../../models/Employee");

const CREATE_EMPLOYEE = {
  type: EmployeeType,
  args: {
    firstName: { type: GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLNonNull(GraphQLString) },
    nic: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
    jobRole: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    var emp = new Employee({
      firstName: args.firstName,
      lastName: args.lastName,
      nic: args.nic,
      address: args.address,
      jobRole: args.jobRole,
    });
    return emp.save();
  },
};

const UPDATE_EMPLOYEE = {
  type: EmployeeType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    nic: { type: GraphQLString },
    address: { type: GraphQLString },
    jobRole: { type: GraphQLString },
  },
  resolve(parent, args) {
    var emp = Employee.findByIdAndUpdate(
      args.id,
      {
        $set: {
          firstName: args.firstName,
          lastName: args.lastName,
          nic: args.nic,
          address: args.address,
          jobRole: args.jobRole,
        },
      },
      { new: true, runValidators: true }
    );
    return emp;
  },
};
const DELETE_EMPLOYEE = {
  type: EmployeeType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return Employee.findByIdAndUpdate(args.id);
  },
};

module.exports = { CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE };
