import { ICrudOperations } from '@/shared/interfaces'

export type TUserModel = {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export interface IUserOperations extends ICrudOperations<TUserModel> {}
