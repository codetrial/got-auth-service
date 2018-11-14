'use strict';

module.exports = {
  Query: {
    resourceType(root, { id }, ctx) {
      return ctx.connector.resourcetype.getById(id);
    },
    resourceTypes(root, { param }, ctx) {
      return ctx.connector.resourcetype.getAll(param);
    },
  },
};
