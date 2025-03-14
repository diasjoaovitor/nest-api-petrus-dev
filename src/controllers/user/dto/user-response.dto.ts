import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class UserResponseDTO {
  @ApiProperty({
    name: 'id',
    description: 'The id of the user',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @IsString()
  @IsNotEmpty()
  id: string

  @ApiProperty({
    name: 'name',
    description: 'The name of the user',
    example: 'John Doe'
  })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    name: 'email',
    description: 'The email of the user',
    example: 'john.doe@example.com'
  })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({
    name: 'createdAt',
    description: 'The date and time the user was created',
    example: '2021-01-01T00:00:00.000Z'
  })
  @IsNotEmpty()
  @IsDate()
  createdAt: Date

  @ApiProperty({
    name: 'updatedAt',
    description: 'The date and time the user was updated',
    example: '2021-01-01T00:00:00.000Z'
  })
  @IsNotEmpty()
  @IsDate()
  updatedAt: Date

  constructor(params: UserResponseDTO) {
    this.id = params.id
    this.name = params.name
    this.email = params.email
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
  }
}
