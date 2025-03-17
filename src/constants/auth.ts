export const PUBLIC_ENDPOINT_METADATA_KEY = 'public-endpoint'

export const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in the environment variables')
  }
  return secret
}
