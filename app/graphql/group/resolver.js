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
};
