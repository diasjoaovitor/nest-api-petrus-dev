import { Body, Controller, HttpStatus, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { Public } from '@/decorators/public.decorator'
import { AuthService } from '@/services/auth.service'

import { AuthenticateUserRequestDTO, AuthenticateUserResponseDTO } from './dto'

interface IAuthController {
  login(
    authenticateUserBody: AuthenticateUserRequestDTO
  ): Promise<AuthenticateUserResponseDTO>
}

@ApiTags('auth')
@Controller('auth')
export class AuthController implements IAuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Authenticate a user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully authenticated.',
    type: AuthenticateUserResponseDTO
  })
  async login(
    @Body() authenticateUserBody: AuthenticateUserRequestDTO
  ): Promise<AuthenticateUserResponseDTO> {
    const token = await this.authService.login(authenticateUserBody)
    return new AuthenticateUserResponseDTO(token)
  }
}
