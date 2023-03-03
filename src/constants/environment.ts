export const ENVIRONMENT: Record<string, string> = {
  CLOUD_NAME: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ||= '',
  PRESET_ID: import.meta.env.VITE_CLOUDINARY_PRESET_ID ||= '',
  API_BASE_URL: import.meta.env.VITE_CLOUDINARY_API_BASE_URL ||= ''
}
