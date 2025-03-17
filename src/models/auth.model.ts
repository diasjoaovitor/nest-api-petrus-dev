export type TTokenPayload = {
  sub: string
  name: string
  email: string
  exp: number
  iat: number
  aud: string
}

export type TCredentials = {
  email: string
  password: string
}

export interface IAuthOperations {
  login(credentials: TCredentials): Promise<string>
}
