import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const { PORT = 3000 } = process.env

;(async () => {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT)
  console.log(`Server is running on http://localhost:${PORT}`)
})().catch((err) => {
  console.error(err)
})
