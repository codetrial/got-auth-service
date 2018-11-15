'use strict';

module.exports = {
  Query: {
    user(root, { id }, ctx) {
      return ctx.connector.user.getById(id);
    },
    users(root, { param }, ctx) {
      return ctx.connector.user.getAll(param);
    },
  },
  User: {
    groups(user, { param }, ctx) {
      return ctx.connector.user.getRole(user.id, param);
    },
    roles(user, { param }, ctx) {
      return ctx.connector.user.getGroup(user.id, param);
    },
    resources(user, { param }, ctx) {
      return ctx.connector.user.getResource(user.id, param);
    },
  },
  Mutation: {
    createUser(root, { data }, ctx) {
      return ctx.connector.user.create(data);
    },
    updateUser(root, { id, data }, ctx) {
      return ctx.connector.user.update(id, data);
    },
    destroyUser(root, { id }, ctx) {
      return ctx.connector.user.destroy(id);
    },

    addUserGroup(root, { id, groups }, ctx) {
      return ctx.connector.user.addGroup(id, groups);
    },
    removeUserGroup(root, { id, groups }, ctx) {
      return ctx.connector.user.removeGroup(id, groups);
    },

    addUserRole(root, { id, roles }, ctx) {
      return ctx.connector.user.addRole(id, roles);
    },
    removeUserRole(root, { id, roles }, ctx) {
      return ctx.connector.user.removeRole(id, roles);
    },
  },
};
