'use strict';

module.exports = {
  Query: {
    group(root, { id }, ctx) {
      return ctx.connector.group.getById(id);
    },
    groups(root, { param }, ctx) {
      return ctx.connector.group.getAll(param);
    },
  },
  Group: {
    roles(group, { param }, ctx) {
      return ctx.connector.group.getRole(group.id, param);
    },
  },
  Mutation: {
    createGroup(root, { data }, ctx) {
      return ctx.connector.group.create(data);
    },
    updateGroup(root, { id, data }, ctx) {
      return ctx.connector.group.update(id, data);
    },
    destroyGroup(root, { id }, ctx) {
      return ctx.connector.group.destroy(id);
    },

    addGroupRole(root, { id, roles }, ctx) {
      return ctx.connector.group.addRole(id, roles);
    },
    removeGroupRole(root, { id, roles }, ctx) {
      return ctx.connector.group.removeRole(id, roles);
    },
  },
};
