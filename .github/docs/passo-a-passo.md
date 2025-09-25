Projeto desenvolvido com base na aula [API REST com NESTJS do ZERO a AWS com TERRAFORM e Github Actions](https://www.youtube.com/watch?v=csWHIujcbKI) publicada no canal [Petrus de Melo DEV](https://www.youtube.com/@petrusdemelodev)

## Introdução

Meu projeto difere um pouco do que foi construído na aula e disponibilizado no repositório [001-api-rest-com-nestjs-do-zero-a-aws-com-terraform](https://github.com/petrusdemelodev/001-api-rest-com-nestjs-do-zero-a-aws-com-terraform). No meu caso, criei o projeto do total zero baseado no [node-boilerplate](https://github.com/diasjoaovitor/node-boilerplate) que eu mesmo criei.

## Setup Inicial

Instalação das dependências do `node-boilerplate` e limpeza do diretório `src`:

```sh
pnpm install
sudo rm -r src/*
```

Instalação da `CLI` do [NestJS](https://docs.nestjs.com/first-steps):

```sh
npm i -g @nestjs/cli
```

Instalação das dependências do `Nest`, sendo essas o [@nestjs/core](https://www.npmjs.com/package/@nestjs/core), [@nestjs/common](https://www.npmjs.com/package/@nestjs/common) e [@nestjs/platform-express](https://www.npmjs.com/package/@nestjs/platform-express):

```sh
pnpm add @nestjs/core @nestjs/common @nestjs/platform-express
```

Instalação do módulos [@nestjs/testing](https://www.npmjs.com/package/@nestjs/testing), [supertest](https://www.npmjs.com/package/supertest) e [@types/supertest](https://www.npmjs.com/package/@types/supertest):

```sh
pnpm add -D @nestjs/testing supertest @types/supertest
```

Criação dos arquivos:

- src/app.controller.spec.ts
- src/app.controller.ts
- src/app.modules.ts
- src/app.service.ts
- src/main.ts
- tests/e2e/app.e2e-spec.ts
- jest-e2e.config.ts
- tsconfig.build.json

Modificação dos arquivos:

- tsconfig.json
- jest.config.ts

Adição dos `scripts`:

```json
{
  "start": "nest start",
  "start:dev": "nest start --watch",
  "start:debug": "nest start --debug --watch",
  "start:prod": "node dist/main",
  "build": "nest build",
  "test": "jest",
  "test:watch": "jest --watch",
  "test:cov": "jest --coverage",
  "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
  "test:e2e": "jest --config jest-e2e.config.ts"
}
```

Depois de realizar todos esses passos, foi possível rodar os comandos abaixo com sucesso:

```sh
pnpm test
pnpm test:e2e
pnpm start
```
