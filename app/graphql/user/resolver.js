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
};
