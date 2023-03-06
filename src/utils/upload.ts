import { ENVIRONMENT } from '../constants/environment'
import cloudinaryMockResponse from '../../detectionObjectMock.json'
import betaFaceMockResponse from '../../detectionObjectMockBetaFace.json'
import { BetaFaceAPIResponse, CloudinaryDetectionResponse } from '../types'

const { API_BASE_URL, CLOUD_NAME, PRESET_ID, NODE_ENV } = ENVIRONMENT

const isProduction = NODE_ENV === 'production'

export async function uploadImage (file: any): Promise<CloudinaryDetectionResponse> {
  // @ts-expect-error
  if (!isProduction) return cloudinaryMockResponse
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', PRESET_ID)
  formData.append('timestamp', `${Date.now() / 1000}`)

  const UPLOAD_IMAGE_URL = `${API_BASE_URL}/${CLOUD_NAME}/image/upload`
  const fetchConfig = {
    method: 'POST',
    body: formData
  }

  return await fetch(UPLOAD_IMAGE_URL, fetchConfig)
    .then(async response => await response.json())
    .then((res) => res).catch((err) => console.log(err))
}

export async function fetchBetaFace (imageUrl: string = 'http://betafaceapi.com/api_examples/sample.png'): Promise<BetaFaceAPIResponse> {
  if (NODE_ENV === 'development') return betaFaceMockResponse
  return await fetch('https://www.betafaceapi.com/api/v2/media', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      api_key: 'd45fd466-51e2-4701-8da8-04351c872236',
      file_uri: imageUrl,
      detection_flags: 'basicpoints,propoints,classifiers,content,extended',
      recognize_targets: ['all@mynamespace'],
      original_filename: 'sample.png'
    })
  })
    .then(async (response) => await response.json())
    .then(data => data)
    .catch((error) => console.log(error))
}
