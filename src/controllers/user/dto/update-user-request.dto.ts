import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsEmail, IsString } from 'class-validator'
import { IsDate, IsNotEmpty } from 'class-validator'

export class UpdateUserRequestDTO {
  @ApiProperty({
    name: 'id',
    description: 'The id of the user',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty({
    name: 'name',
    description: 'The name of the user',
    example: 'John Doe'
  })
  @IsNotEmpty()
  @IsString()
  public name: string

  @ApiProperty({
    name: 'email',
    description: 'The email of the user',
    example: 'john.doe@example.com'
  })
  @IsNotEmpty()
  @IsEmail()
  public email: string

  @ApiProperty({
    name: 'password',
    description: 'The password of the user',
    example: 'password'
  })
  @IsNotEmpty()
  @IsString()
  public password: string

  @ApiProperty({
    name: 'createdAt',
    description: 'The date and time the user was created',
    example: '2021-01-01T00:00:00.000Z'
  })
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value as string))
  createdAt: string

  constructor(partial: Partial<UpdateUserRequestDTO>) {
    Object.assign(this, partial)
  }
}
