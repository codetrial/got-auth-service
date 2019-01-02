'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540464975987_7448';

  // add your config here
  config.middleware = [ 'graphql' ];

  config.sequelize = {
    dialect: 'mysql',
    /* mysql config here */
    database: 'gotauth',
    host: 'localhost',
    port: '3306',
    username: process.env.GOT_DB_USR,
    password: process.env.GOT_DB_PWD,
  };

  config.graphql = {
    router: '/graphql',
    app: true,
    agent: false,
    graphiql: true,
  };

  config.token = {
    type: 'md5',

    apps: {
      codetrial: {
        secret: 'moi8nvXuYTw28onZc90DLkmGeRWQ',
        expires: 30000,
      },
    },
  };

  config.security = {
    csrf: {
      // @todo: provisionally ignore csrf
      ignore: () => true,
    },
  };

  return config;
};
