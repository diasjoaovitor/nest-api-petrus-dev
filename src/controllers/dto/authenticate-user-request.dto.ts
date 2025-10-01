import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class AuthenticateUserRequestDTO {
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
}
