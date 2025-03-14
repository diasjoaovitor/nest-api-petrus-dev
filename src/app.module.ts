import { Module } from '@nestjs/common'

import { UserController } from './controllers'
import { UserRepository } from './repositories'
import { UserService } from './services'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository]
})
export class AppModule {}
