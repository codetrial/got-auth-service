'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540464975987_7448';

  // add your config here
  config.middleware = [ 'graphql' ];

  config.sequelize = {
    dialect: 'mysql',
    /* mysql config here */
  };

  config.graphql = {
    router: '/graphql',
    app: true,
    agent: false,
    graphiql: true,
  };

  exports.security = {
    csrf: {
      // @todo: provisionally ignore csrf
      ignore: () => true,
    },
  };

  return config;
};
