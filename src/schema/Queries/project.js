const { GraphQLList, GraphQLID } = require("graphql");
const ProjectType = require("../TypeQueries/project");
const Project = require("../../models/Project");

const GET_PROJECTS = {
  type: new GraphQLList(ProjectType),
  resolve(parent, args) {
    return Project.find();
  },
};

const GET_PROJECT = {
  type: ProjectType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Project.findById(args.id);
  },
};
const GET_PROJECTS_BY_CLIENT = {
  type: new GraphQLList(ProjectType),
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    const query = {
      clients: args.id,
    };
    return Project.find(query);
  },
};
const GET_PROJECTS_BY_EMPLOYEE = {
  type: new GraphQLList(ProjectType),
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    const query = {
      employees: args.id,
    };
    return Project.find(query);
  },
};

module.exports = {
  GET_PROJECTS,
  GET_PROJECT,
  GET_PROJECTS_BY_CLIENT,
  GET_PROJECTS_BY_EMPLOYEE,
};
