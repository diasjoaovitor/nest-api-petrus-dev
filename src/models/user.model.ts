import { ICrudOperations } from '@/interfaces'

export type TUserModel = {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export interface IUserOperations extends ICrudOperations<TUserModel> {
  getByEmail(email: string): Promise<TUserModel | null>
}
