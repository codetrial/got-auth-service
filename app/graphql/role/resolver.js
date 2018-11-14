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
};
