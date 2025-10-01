export type TCreateParams<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>

export type TUpdateParams<T> = Omit<T, 'updatedAt'>

export interface ICrudOperations<
  T,
  C = TCreateParams<T>,
  U = TUpdateParams<T>
> {
  create(params: C): Promise<T>
  getAll(): Promise<T[]>
  getById(id: string): Promise<T | null>
  update(params: U): Promise<T | null>
  delete(id: string): Promise<string | null>
}
