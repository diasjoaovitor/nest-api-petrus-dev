import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

const { PORT = 3000 } = process.env

;(async () => {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))

  const config = new DocumentBuilder()
    .setTitle('API Rest NestJS do Zero a AWS com Terraform')
    .setDescription(
      'Projeto apresentado no canal do Youtube do Petrus de Melo DEV. Disponível em https://youtu.be/csWHIujcbKI?si=gMgRhGbkkyRQb3Op'
    )
    .setVersion('1.0')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documentFactory)

  await app.listen(PORT)
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log(`API documentation: http://localhost:${PORT}/api`)
})().catch((err) => {
  console.error(err)
})
