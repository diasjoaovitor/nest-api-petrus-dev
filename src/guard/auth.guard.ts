import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { FastifyRequest } from 'fastify'

import { PUBLIC_ENDPOINT_METADATA_KEY } from '@/constants/auth'
import { UnauthorizedError } from '@/errors/auth.error'
import { TTokenPayload } from '@/types/auth'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      PUBLIC_ENDPOINT_METADATA_KEY,
      [context.getHandler(), context.getClass()]
    )
    if (isPublic) {
      return true
    }
    const request = context.switchToHttp().getRequest<FastifyRequest>()
    const token = this.extractTokenFromHeader(request)
    if (!token) {
      throw new UnauthorizedError()
    }
    try {
      const payload: TTokenPayload = await this.jwtService.verifyAsync(token)
      request.id = payload.sub
    } catch {
      throw new UnauthorizedError()
    }
    return true
  }

  private extractTokenFromHeader(request: FastifyRequest): string | null {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : null
  }
}
