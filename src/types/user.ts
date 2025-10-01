import { ICrudOperations } from './crud-operations'

export type TUser = {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export interface IUserOperations extends ICrudOperations<TUser> {
  getByEmail(email: string): Promise<TUser | null>
}
