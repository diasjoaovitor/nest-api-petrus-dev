export type TCreateParams<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>

export type TUpdateParams<T> = Omit<T, 'updatedAt'>

export type TResponse<T> = Omit<T, 'password'>

export interface ICrudOperations<
  T,
  C = TCreateParams<T>,
  U = TUpdateParams<T>
> {
  create(params: C): Promise<TResponse<T>>
  getAll(): Promise<TResponse<T>[]>
  getById(id: string): Promise<TResponse<T> | null>
  update(params: U): Promise<TResponse<T> | null>
  delete(id: string): Promise<string | null>
}
