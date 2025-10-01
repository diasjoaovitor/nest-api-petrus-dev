import { v4 as uuid } from 'uuid'

import { TUser } from '@/types/user'

type TUserParams = Partial<TUser> & Pick<TUser, 'name' | 'email' | 'password'>

export class User {
  readonly id: string
  readonly createdAt: Date
  name: string
  email: string
  password: string
  updatedAt: Date

  constructor(init: TUserParams) {
    Object.assign(
      this,
      {
        id: uuid(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      init
    )
  }
}
