import { BadRequestException, NotFoundException } from '@nestjs/common'

export class UserNotFoundError extends NotFoundException {
  constructor(message: string = 'User not found') {
    super(message)
    this.name = 'UserNotFoundError'
  }
}

export class EmailAlreadyExistsError extends BadRequestException {
  constructor(message: string = 'Email already exists') {
    super(message)
    this.name = 'EmailAlreadyExistsError'
  }
}
