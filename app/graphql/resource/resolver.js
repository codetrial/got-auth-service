'use strict';

module.exports = {
  Query: {
    resource(root, { id }, ctx) {
      return ctx.connector.resource.getById(id);
    },
    resources(root, { appId }, ctx) {
      if (appId) {
        return ctx.connector.resource.getByAppId(appId);
      }
      return ctx.connector.resource.getAll();
    },
  },
};
