import { ENVIRONMENT } from '../constants'

const { API_BASE_URL, CLOUD_NAME, PRESET_ID } = ENVIRONMENT

export async function uploadImage (file: any): Promise<void> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', PRESET_ID)
  formData.append('timestamp', Date.now() / 1000)

  const UPLOAD_IMAGE_URL = `${API_BASE_URL}/${CLOUD_NAME}/image/upload`
  const fetchConfig = {
    method: 'POST',
    body: formData
  }

  return await fetch(UPLOAD_IMAGE_URL, fetchConfig)
    .then(async response => await response.json())
    .then((res) => res).catch((err) => console.log(err))
}
