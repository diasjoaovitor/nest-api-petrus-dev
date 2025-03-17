import { UnauthorizedException } from '@nestjs/common'

export class InvalidCredentialsError extends UnauthorizedException {
  constructor(message: string = 'Invalid credentials') {
    super(message)
    this.name = 'InvalidCredentialsError'
  }
}

export class UnauthorizedError extends UnauthorizedException {
  constructor(message: string = 'Unauthorized') {
    super(message)
    this.name = 'UnauthorizedError'
  }
}
