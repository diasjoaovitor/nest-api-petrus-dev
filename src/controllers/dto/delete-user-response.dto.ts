import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class DeleteUserResponseDTO {
  @ApiProperty({
    name: 'id',
    description: 'The id of the deleted user',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @IsString()
  @IsNotEmpty()
  id: string

  constructor(id: string) {
    this.id = id
  }
}
