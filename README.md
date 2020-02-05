# GOT Auth Service

[![License](https://img.shields.io/github/license/codetrial/got-auth-service.svg)](https://github.com/codetrial/got-auth-service)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/codetrial/got-auth-service)

A professional role-based-authorization service(also supports resource and group) for enterprise applications.

English | [简体中文](./README.zh-CN.md)

## Docs

[:zap: Live Demo](https://gotauth-api.felixpy.com/) | [:book: Docs](https://codetrial.github.io/gotauth)

## Screen Capture

![Screen Capture](.github/preview.gif)

## QuickStart

### Database

Use file [gotauth.sql](./data/gotauth.sql) to initialize your database, then update the configuration of the sql server.

### Development

```bash
npm i
npm run dev
open http://localhost:7001/
```

### Deploy

```bash
npm start
npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

## Core Features

- :camera: Auth Application
- :tv: Auth Resource
- :telephone_receiver: Auth Role
- :pager: Auth Group
- :watch: Auth User
- :radio: Restful
- :mag_right: GraphQL
- :ghost: Authorization

## Contributing

Looking forward to your pull requests.

## Built With

- [Apollo GraphQL](https://github.com/apollographql/apollo-server)
- [Sequelize](https://github.com/sequelize/sequelize)
- [Egg.js](https://github.com/eggjs/egg)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 - present, Felix Yang
