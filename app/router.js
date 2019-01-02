'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middlewares, config } = app;
  const search = middlewares.search();
  const token = middlewares.token(config.token, app);

  router.get('/', controller.home.index);

  router.get('/api/app', search, controller.app.index);
  router.post('/api/app', token, controller.app.create);
  router.get('/api/app/:id', controller.app.show);
  router.put('/api/app/:id', token, controller.app.update);
  router.delete('/api/app/:id', token, controller.app.destroy);
  router.get('/api/app/:id/group', search, controller.app.getGroup);
  router.get('/api/app/:id/role', search, controller.app.getRole);
  router.get('/api/app/:id/resource', search, controller.app.getResource);

  router.get('/api/group', search, controller.group.index);
  router.post('/api/group', token, controller.group.create);
  router.get('/api/group/:id', controller.group.show);
  router.put('/api/group/:id', token, controller.group.update);
  router.delete('/api/group/:id', token, controller.group.destroy);
  router.get('/api/group/:id/role', search, controller.group.getRole);
  router.post('/api/group/:id/role', token, controller.group.addRole);
  router.delete('/api/group/:id/role', token, controller.group.removeRole);

  router.get('/api/role', search, controller.role.index);
  router.post('/api/role', token, controller.role.create);
  router.get('/api/role/:id', controller.role.show);
  router.put('/api/role/:id', token, controller.role.update);
  router.delete('/api/role/:id', token, controller.role.destroy);
  router.get('/api/role/:id/resource', search, controller.role.getResource);
  router.post('/api/role/:id/resource', token, controller.role.addResource);
  router.delete(
    '/api/role/:id/resource',
    token,
    controller.role.removeResource
  );

  router.get('/api/resource', search, controller.resource.index);
  router.post('/api/resource', token, controller.resource.create);
  router.get('/api/resource/:id', controller.resource.show);
  router.put('/api/resource/:id', token, controller.resource.update);
  router.delete('/api/resource/:id', token, controller.resource.destroy);

  router.get('/api/resource-type', search, controller.resourcetype.index);
  router.post('/api/resource-type', token, controller.resourcetype.create);
  router.get('/api/resource-type/:id', controller.resourcetype.show);
  router.put('/api/resource-type/:id', token, controller.resourcetype.update);
  router.delete(
    '/api/resource-type/:id',
    token,
    controller.resourcetype.destroy
  );

  router.get('/api/user', search, controller.user.index);
  router.post('/api/user', token, controller.user.create);
  router.get('/api/user/:id', controller.user.show);
  router.put('/api/user/:id', token, controller.user.update);
  router.delete('/api/user/:id', token, controller.user.destroy);
  router.get('/api/user/:id/group', search, controller.user.getGroup);
  router.post('/api/user/:id/group', token, controller.user.addGroup);
  router.delete('/api/user/:id/group', token, controller.user.removeGroup);
  router.get('/api/user/:id/role', search, controller.user.getRole);
  router.post('/api/user/:id/role', token, controller.user.addRole);
  router.delete('/api/user/:id/role', token, controller.user.removeRole);
  router.get('/api/user/:id/resource', search, controller.user.getResource);
};
