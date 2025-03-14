import { NotFoundException } from '@nestjs/common'

export class UserNotFoundError extends NotFoundException {
  constructor(message: string = 'User not found') {
    super(message)
    this.name = 'UserNotFoundError'
  }
}
