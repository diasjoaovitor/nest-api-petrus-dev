import { CustomDecorator, SetMetadata } from '@nestjs/common'

import { PUBLIC_ENDPOINT_METADATA_KEY } from '@/constants/auth'

export const Public = (): CustomDecorator<string> =>
  SetMetadata(PUBLIC_ENDPOINT_METADATA_KEY, true)
