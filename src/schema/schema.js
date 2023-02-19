const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { GET_EMPLOYEES, GET_EMPLOYEE } = require("../schema/Queries/employee");
const { GET_CLIENTS, GET_CLIENT } = require("./Queries/client");
const {
  GET_PROJECTS,
  GET_PROJECT,
  GET_PROJECTS_BY_CLIENT,
  GET_PROJECTS_BY_EMPLOYEE,
} = require("./Queries/project");
const {
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} = require("./Mutations/employee");
const {
  CREATE_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT,
} = require("./Mutations/client");
const {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
} = require("./Mutations/project");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getEmployees: GET_EMPLOYEES,
    getEmployeeByID: GET_EMPLOYEE,
    getClients: GET_CLIENTS,
    getClientByID: GET_CLIENT,
    getProjects: GET_PROJECTS,
    getProjectByID: GET_PROJECT,
    getProjectByClient: GET_PROJECTS_BY_CLIENT,
    getProjectByEmployee: GET_PROJECTS_BY_EMPLOYEE,
  },
});
const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    // Creates
    createEmployee: CREATE_EMPLOYEE,
    createClient: CREATE_CLIENT,
    createProject: CREATE_PROJECT,
    // Updates
    updateEmployee: UPDATE_EMPLOYEE,
    updateClient: UPDATE_CLIENT,
    updateProject: UPDATE_PROJECT,
    // DELETE
    deleteEmployee: DELETE_EMPLOYEE,
    deleteClient: DELETE_CLIENT,
    deleteProject: DELETE_PROJECT,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
