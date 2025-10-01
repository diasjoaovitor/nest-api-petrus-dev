import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcrypt'

import { InvalidCredentialsError } from '@/errors/auth.error'
import { UserRepository } from '@/repositories/user.repository'
import { IAuthOperations, TCredentials, TTokenPayload } from '@/types/auth'

@Injectable()
export class AuthService implements IAuthOperations {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async login(credentials: TCredentials): Promise<string> {
    const user = await this.userRepository.getByEmail(credentials.email)
    const isPasswordValid = await compare(
      credentials.password,
      user?.password ?? ''
    )
    if (!user || !isPasswordValid) {
      throw new InvalidCredentialsError()
    }
    const payload: TTokenPayload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
      iat: Math.floor(Date.now() / 1000),
      aud: 'PetrusDeMeloDEV - Se inscreva no canal e ative o sininho'
    }
    const token = await this.jwtService.signAsync(payload)
    return token
  }
}
