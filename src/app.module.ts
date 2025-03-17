import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'

import { getJwtSecret } from './constants'
import { AuthController, UserController } from './controllers'
import { AuthGuard } from './guard'
import { UserRepository } from './repositories'
import { AuthService, UserService } from './services'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true
    }),
    JwtModule.register({
      global: true,
      secret: getJwtSecret()
    })
  ],
  controllers: [UserController, AuthController],
  providers: [
    UserService,
    UserRepository,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
