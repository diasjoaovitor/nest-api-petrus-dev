import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class AuthenticateUserResponseDTO {
  @ApiProperty({
    name: 'token',
    description: 'The token of the authenticated user',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @IsString()
  @IsNotEmpty()
  token: string

  constructor(token: string) {
    this.token = token
  }
}
