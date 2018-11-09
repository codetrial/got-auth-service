'use strict';

module.exports = {
  Query: {
    user(root, { id }, ctx) {
      return ctx.connector.user.getById(id);
    },
    users(root, args, ctx) {
      return ctx.connector.user.getAll();
    },
  },
};
