'use strict';

module.exports = {
  Query: {
    role(root, { id }, ctx) {
      return ctx.connector.role.getById(id);
    },
    roles(root, { param }, ctx) {
      return ctx.connector.role.getAll(param);
    },
  },
  Role: {
    resources(role, { param }, ctx) {
      return ctx.connector.role.getResource(role.id, param);
    },
  },
  Mutation: {
    createRole(root, { data }, ctx) {
      return ctx.connector.role.create(data);
    },
    updateRole(root, { id, data }, ctx) {
      return ctx.connector.role.update(id, data);
    },
    destroyRole(root, { id }, ctx) {
      return ctx.connector.role.destroy(id);
    },

    addRoleResource(root, { id, roles }, ctx) {
      return ctx.connector.role.addResource(id, roles);
    },
    removeRoleResource(root, { id, roles }, ctx) {
      return ctx.connector.role.removeResource(id, roles);
    },
  },
};
