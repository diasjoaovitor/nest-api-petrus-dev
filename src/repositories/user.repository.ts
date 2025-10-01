import { Injectable } from '@nestjs/common'

import { User } from '@/domain/user.domain'
import { IUserOperations, TUser } from '@/types/user'

@Injectable()
export class UserRepository implements IUserOperations {
  private users: User[] = []

  async create(user: User): Promise<TUser> {
    this.users.push(user)
    return await Promise.resolve(user)
  }

  async getAll(): Promise<TUser[]> {
    return await Promise.resolve(this.users)
  }

  async getById(id: string): Promise<TUser | null> {
    return await Promise.resolve(
      this.users.find((user) => user.id === id) || null
    )
  }

  async getByEmail(email: string): Promise<TUser | null> {
    return await Promise.resolve(
      this.users.find((user) => user.email === email) || null
    )
  }

  async update(user: User): Promise<TUser | null> {
    const index = this.users.findIndex((user) => user.id === user.id)
    if (index === -1) {
      return null
    }
    this.users[index] = user
    return await Promise.resolve(user)
  }

  async delete(id: string): Promise<string | null> {
    const filteredUsers = this.users.filter((user) => user.id !== id)
    if (filteredUsers.length === this.users.length) {
      return null
    }
    this.users = filteredUsers
    return await Promise.resolve(id)
  }
}
