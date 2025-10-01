import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

const { PORT = 3000 } = process.env

;(async () => {
  const app = await NestFactory.create(AppModule, new FastifyAdapter())
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))

  const config = new DocumentBuilder()
    .setTitle('API Rest NestJS do Zero a AWS com Terraform')
    .addBearerAuth()
    .setVersion('1.0')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/', app, documentFactory)

  await app.listen(PORT, () => {
    console.log(`\n🚀 Server is running on: http://localhost:${PORT}`)
  })
})()
