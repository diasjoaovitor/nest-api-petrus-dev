import { Injectable } from '@nestjs/common'
import { hash } from 'bcrypt'

import { User } from '@/domain/user.domain'
import { EmailAlreadyExistsError, UserNotFoundError } from '@/errors/user.error'
import { UserRepository } from '@/repositories/user.repository'
import { TCreateParams, TUpdateParams } from '@/types/crud-operations'
import { IUserOperations, TUser } from '@/types/user'

const SALT_ROUNDS = 10

@Injectable()
export class UserService implements Omit<IUserOperations, 'getByEmail'> {
  constructor(private readonly userRepository: UserRepository) {}

  async create(params: TCreateParams<TUser>): Promise<TUser> {
    const existingUser = await this.userRepository.getByEmail(params.email)
    if (existingUser) {
      throw new EmailAlreadyExistsError()
    }
    const passwordHash = await hash(params.password, SALT_ROUNDS)
    const user = new User({ ...params, password: passwordHash })
    const createdUser = await this.userRepository.create(user)
    return createdUser
  }

  async getAll(): Promise<TUser[]> {
    return await this.userRepository.getAll()
  }

  async getById(id: string): Promise<TUser> {
    const user = await this.userRepository.getById(id)
    if (!user) {
      throw new UserNotFoundError()
    }
    return user
  }

  async update(params: TUpdateParams<TUser>): Promise<TUser> {
    const user = new User(params)
    const updatedUser = await this.userRepository.update(user)
    if (!updatedUser) {
      throw new UserNotFoundError()
    }
    return updatedUser
  }

  async delete(id: string): Promise<string> {
    const deletedUserId = await this.userRepository.delete(id)
    if (!deletedUserId) {
      throw new UserNotFoundError()
    }
    return deletedUserId
  }
}
