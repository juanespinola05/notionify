import { ENVIRONMENT } from '../constants/environment'

const isProduction = ENVIRONMENT.NODE_ENV === 'production'

const SERVICE_NOT_AVAILABLE = 'Service not available, try again later'

export const handleError = (error: any): string => {
  console.log(error)

  return SERVICE_NOT_AVAILABLE
}
