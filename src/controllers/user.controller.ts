import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { Public } from '@/decorators/public.decorator'
import { UserService } from '@/services/user.service'

import {
  CreateUserRequestDTO,
  DeleteUserResponseDTO,
  UpdateUserRequestDTO,
  UserResponseDTO
} from './dto'

interface IUserController {
  create(createUserBody: CreateUserRequestDTO): Promise<UserResponseDTO>
  getAll(): Promise<UserResponseDTO[]>
  getById(id: string): Promise<UserResponseDTO>
  update(updateUserBody: UpdateUserRequestDTO): Promise<UserResponseDTO>
  delete(id: string): Promise<DeleteUserResponseDTO>
}

@ApiTags('users')
@Controller('users')
export class UserController implements IUserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully created.',
    type: UserResponseDTO
  })
  async create(
    @Body() createUserBody: CreateUserRequestDTO
  ): Promise<UserResponseDTO> {
    const user = await this.userService.create(createUserBody)
    return new UserResponseDTO(user)
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The users have been successfully retrieved.',
    type: UserResponseDTO
  })
  async getAll(): Promise<UserResponseDTO[]> {
    const users = await this.userService.getAll()
    return users.map((user) => new UserResponseDTO(user))
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully retrieved.',
    type: UserResponseDTO
  })
  async getById(@Param('id') id: string): Promise<UserResponseDTO> {
    const userResult = await this.userService.getById(id)
    return new UserResponseDTO(userResult)
  }

  @Put()
  @ApiOperation({ summary: 'Update a user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully updated.',
    type: UserResponseDTO
  })
  async update(
    @Body() updateUserBody: UpdateUserRequestDTO
  ): Promise<UserResponseDTO> {
    const user = await this.userService.update({
      ...updateUserBody,
      createdAt: new Date(updateUserBody.createdAt)
    })
    return new UserResponseDTO(user)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully deleted.',
    type: DeleteUserResponseDTO
  })
  async delete(@Param('id') id: string): Promise<DeleteUserResponseDTO> {
    const deletedUserId = await this.userService.delete(id)
    return new DeleteUserResponseDTO(deletedUserId)
  }
}
