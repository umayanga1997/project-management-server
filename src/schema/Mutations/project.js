const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLID,
} = require("graphql");
const ProjectType = require("../TypeQueries/project");
const Project = require("../../models/Project");

const CREATE_PROJECT = {
  type: ProjectType,
  args: {
    projectName: { type: GraphQLNonNull(GraphQLString) },
    createDate: { type: GraphQLNonNull(GraphQLString) },
    dueDate: { type: GraphQLNonNull(GraphQLString) },
    employees: { type: GraphQLList(GraphQLID) },
    clients: { type: GraphQLList(GraphQLID) },
    comment: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    var pro = new Project({
      projectName: args.projectName,
      createDate: args.createDate,
      dueDate: args.dueDate,
      employees: args.employees,
      clients: args.clients,
      comment: args.comment,
    });
    return pro.save();
  },
};
const UPDATE_PROJECT = {
  type: ProjectType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    projectName: { type: GraphQLNonNull(GraphQLString) },
    createDate: { type: GraphQLNonNull(GraphQLString) },
    dueDate: { type: GraphQLNonNull(GraphQLString) },
    employees: { type: GraphQLList(GraphQLID) },
    clients: { type: GraphQLList(GraphQLID) },
    comment: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    return Project.findByIdAndUpdate(
      args.id,
      {
        $set: {
          projectName: args.projectName,
          createDate: args.createDate,
          dueDate: args.dueDate,
          employees: args.employees,
          clients: args.clients,
          comment: args.comment,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  },
};
const DELETE_PROJECT = {
  type: ProjectType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return Project.findByIdAndDelete(args.id);
  },
};

module.exports = { CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT };
