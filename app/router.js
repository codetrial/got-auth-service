'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);

  router.get('/api/app', app.middlewares.search(), controller.app.index);
  router.post('/api/app', controller.app.create);
  router.get('/api/app/:id', controller.app.show);
  router.put('/api/app/:id', controller.app.update);
  router.delete('/api/app/:id', controller.app.destroy);
  router.get('/api/app/:id/group', app.middlewares.search(), controller.app.getGroup);
  router.get('/api/app/:id/role', app.middlewares.search(), controller.app.getRole);
  router.get('/api/app/:id/resource', app.middlewares.search(), controller.app.getResource);

  router.get('/api/group', app.middlewares.search(), controller.group.index);
  router.post('/api/group', controller.group.create);
  router.get('/api/group/:id', controller.group.show);
  router.put('/api/group/:id', controller.group.update);
  router.delete('/api/group/:id', controller.group.destroy);
  router.get('/api/group/:id/role', app.middlewares.search(), controller.group.getRole);
  router.post('/api/group/:id/role', controller.group.addRole);
  router.delete('/api/group/:id/role', controller.group.removeRole);

  router.get('/api/role', app.middlewares.search(), controller.role.index);
  router.post('/api/role', controller.role.create);
  router.get('/api/role/:id', controller.role.show);
  router.put('/api/role/:id', controller.role.update);
  router.delete('/api/role/:id', controller.role.destroy);
  router.get('/api/role/:id/resource', app.middlewares.search(), controller.role.getResource);
  router.post('/api/role/:id/resource', controller.role.addResource);
  router.delete('/api/role/:id/resource', controller.role.removeResource);

  router.get('/api/resource', app.middlewares.search(), controller.resource.index);
  router.post('/api/resource', controller.resource.create);
  router.get('/api/resource/:id', controller.resource.show);
  router.put('/api/resource/:id', controller.resource.update);
  router.delete('/api/resource/:id', controller.resource.destroy);

  router.get('/api/resource-type', app.middlewares.search(), controller.resourcetype.index);
  router.post('/api/resource-type', controller.resourcetype.create);
  router.get('/api/resource-type/:id', controller.resourcetype.show);
  router.put('/api/resource-type/:id', controller.resourcetype.update);
  router.delete('/api/resource-type/:id', controller.resourcetype.destroy);

  router.get('/api/user', app.middlewares.search(), controller.user.index);
  router.post('/api/user', controller.user.create);
  router.get('/api/user/:id', controller.user.show);
  router.put('/api/user/:id', controller.user.update);
  router.delete('/api/user/:id', controller.user.destroy);
  router.get('/api/user/:id/group', app.middlewares.search(), controller.user.getGroup);
  router.post('/api/user/:id/group', controller.user.addGroup);
  router.delete('/api/user/:id/group', controller.user.removeGroup);
  router.get('/api/user/:id/role', app.middlewares.search(), controller.user.getRole);
  router.post('/api/user/:id/role', controller.user.addRole);
  router.delete('/api/user/:id/role', controller.user.removeRole);
  router.get('/api/user/:id/resource', app.middlewares.search(), controller.user.getResource);
};
