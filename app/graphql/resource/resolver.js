'use strict';

module.exports = {
  Query: {
    resource(root, { id }, ctx) {
      return ctx.connector.resource.getById(id);
    },
    resources(root, { param }, ctx) {
      return ctx.connector.resource.getAll(param);
    },
  },
};
