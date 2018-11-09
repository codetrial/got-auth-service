'use strict';

module.exports = {
  Query: {
    role(root, { id }, ctx) {
      return ctx.connector.role.getById(id);
    },
    roles(root, { appId }, ctx) {
      if (appId) {
        return ctx.connector.role.getByAppId(appId);
      }
      return ctx.connector.role.getAll();
    },
  },
};
