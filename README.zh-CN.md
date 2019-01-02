# GOT Auth Service

[![License](https://img.shields.io/github/license/codetrial/got-auth-service.svg)](https://github.com/codetrial/got-auth-service)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/codetrial/got-auth-service)

一个为专后台系统打造的基于资源的完整鉴权服务。

简体中文 | [English](./README.md)

## 文档

[:zap: 在线预览](https://gotauth-api.felixpy.com) | [:book: 参考文档](https://codetrial.github.io/gotauth)

## 截图

![Screen Capture](.github/preview.gif)

## 快速开始

### 开发

```bash
npm i
npm run dev
open http://localhost:7001/
```

### 部署

```bash
npm start
npm stop
```

### NPM 脚本

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

## 贡献

期待你的 `pull requests`。如果你觉得有帮助，还请多多反馈！

## 技术栈

- [Apollo GraphQL](https://github.com/apollographql/apollo-server)
- [Sequelize](https://github.com/sequelize/sequelize)
- [Egg.js](https://github.com/eggjs/egg)

## 许可

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 - present, Felix Yang
