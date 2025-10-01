import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'

import { AuthController } from './controllers/auth.controller'
import { UserController } from './controllers/user.controller'
import { AuthGuard } from './guard/auth.guard'
import { UserRepository } from './repositories/user.repository'
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service'
import { getJwtSecret } from './utils/jwt-secret'

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
