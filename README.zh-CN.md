# GOT Auth Service

[![License](https://img.shields.io/github/license/codetrial/got-auth-service.svg)](https://github.com/codetrial/got-auth-service)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/codetrial/got-auth-service)

一个专为企业级后台管理系统打造的基于角色的专业鉴权服务（也支持资源和分组）。

简体中文 | [English](./README.md)

## 管理系统

[GOT Auth Admin](https://github.com/codetrial/got-auth-admin)

## 文档

[:zap: 在线预览](https://gotauth-api.felixpy.com) | [:book: 参考文档](https://codetrial.github.io/gotauth)

## 截图

![Screen Capture](.github/preview.gif)

## 快速开始

### 数据库

使用文件 [gotauth.sql](./data/gotauth.sql) 来初始化你的数据库, 然后更新项目中的数据库配置。

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

### 脚本

- 使用 `npm run lint` 来检测代码格式。
- 使用 `npm test` 来运行单元测试。
- 使用 `npm run autod` 来自动检测依赖包版本更新，参见 [autod](https://www.npmjs.com/package/autod) 来查看详情。

## 核心功能

- :camera: 应用方：使用鉴权系统的相关系统，下面的资源、角色和分组都必须属于某个应用方。
- :tv: 资源：用于描述被鉴权的基本单元，可以被分成多种类型，比如 URI、按钮等。需要注意的是，资源不可以单独分配给用户。
- :telephone_receiver: 角色：一个角色可以包含多个资源，本身也可以单独用于鉴权。可以直接分配给用户。
- :pager: 分组：把多个角色聚合为一个分组，从而可以更快的进行授权。本身也可以单独用于鉴权。可以直接分配给用户。
- :watch: 用户：业务系统的用户，可以为用户授予分组或角色。
- :radio: Restful：提供完整的 Restful API。
- :mag_right: GraphQL：支持 GraphQL API。
- :ghost: API Token 认证：通过 [egg-token](https://github.com/codetrial/egg-token) 进行接口认证。

## 贡献

期待你的 `pull requests`。如果你觉得有帮助，还请多多反馈！

## 技术栈

- [Apollo GraphQL](https://github.com/apollographql/apollo-server)
- [Sequelize](https://github.com/sequelize/sequelize)
- [Egg.js](https://github.com/eggjs/egg)

## 许可

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 - present, Felix Yang
