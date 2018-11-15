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
  Mutation: {
    createResourceType(root, { data }, ctx) {
      return ctx.connector.resourcetype.create(data);
    },
    updateResourceType(root, { id, data }, ctx) {
      return ctx.connector.resourcetype.update(id, data);
    },
    destroyResourceType(root, { id }, ctx) {
      return ctx.connector.resourcetype.destroy(id);
    },
  },
};
