export const ENVIRONMENT = {
  CLOUD_NAME: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ?? '',
  PRESET_ID: import.meta.env.VITE_CLOUDINARY_PRESET_ID ?? '',
  API_BASE_URL: import.meta.env.VITE_CLOUDINARY_API_BASE_URL ?? '',
  NODE_ENV: import.meta.env.VITE_NODE_ENV ?? 'production',
  FEATURE_COUNTDOWN: import.meta.env.VITE_FEATURE_COUNTDOWN ?? false
}
