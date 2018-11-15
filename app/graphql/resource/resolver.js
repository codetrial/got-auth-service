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
  Mutation: {
    createResource(root, { data }, ctx) {
      return ctx.connector.resource.create(data);
    },
    updateResource(root, { id, data }, ctx) {
      return ctx.connector.resource.update(id, data);
    },
    destroyResource(root, { id }, ctx) {
      return ctx.connector.resource.destroy(id);
    },
  },
};
