<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Guia mia

- Este proyecto usa pnpm
- Siguiendo tuto de fazt usando ORM prisma y sqlite https://www.youtube.com/watch?v=vUcNydH1tz0 (quede min 4:40)

  - Se instala:
    pnpm install prisma -D
    npx prisma init --datasource-provider sqlite
    npx prisma migrate dev --name init (este comando se ejecuta luego de crear los schemas y se asi se crea la DB)
    Esto crea archivos dentro de la carpeta "debt-manager-back\prisma"

    Si quiero resetear los Schemas/Types/Interfaces de Prisma

    1. Guardar los datos de schema.prisma
    2. Borrar carpeta debt-manager-back\prisma
    3. Re-iniciar prisma con los comandos

    Para login:
    1ra parte https://www.youtube.com/watch?v=0GaMfn7cr-c (aqui explica un poco del front)
    2da parte https://www.youtube.com/watch?v=u9JttMABiFE (sigue explicando lo de JWT)

NOTA al instalar dependencias y typescript:

- Por lo general las dependencias tienen una instalación noral y adicionalmente toca instalar unas "definiciones" de typescript entonces se instala algo así ej:
  `npm install jsonwebtoken @types/jsonwebtoken`

Explicación en indio de como usar middlewares
[text](https://www.youtube.com/watch?v=8vyXWyml634)

Como funciona JWT

1. Al usuario hacer login en user.controller.ts (user/login) se le genera un token (JWT) y por así decirlo queda Logueado una vez tiene el token
2. Una vez logueado todas las peticiones al back que haga van a pasar por el middleware "debt-manager-back\src\common\middleware\jtw-check.middleware.ts" y debe proporcionar ese token en los headers Authorization, si no está el token lo toma como si no está logueado
