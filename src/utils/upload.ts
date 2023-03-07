/* eslint-disable @typescript-eslint/no-throw-literal */
import { ENVIRONMENT } from '../constants'
import cloudinaryMockResponse from '../../mock/detectionObjectMock.json'
import betaFaceMockResponse from '../../mock/detectionObjectMockBetaFace.json'
import { BetaFaceAPIResponse, CloudinaryDetectionResponse } from '../types'

const { API_BASE_URL, CLOUD_NAME, PRESET_ID, NODE_ENV } = ENVIRONMENT

const isProduction = NODE_ENV === 'production'

interface APIResponses {
  cloudinaryData: CloudinaryDetectionResponse
  betaFaceData: BetaFaceAPIResponse
}

export async function uploadImage (file: File): Promise<APIResponses> {
  const cloudinaryResponse = await uploadToCloudinary(file)
  const betaFaceResponse = await fetchBetaFace(cloudinaryResponse.url)

  return {
    cloudinaryData: cloudinaryResponse,
    betaFaceData: betaFaceResponse
  }
}

export async function uploadToCloudinary (file: any): Promise<CloudinaryDetectionResponse> {
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
  const res = await fetch(UPLOAD_IMAGE_URL, fetchConfig)
  const data = await res.json()

  if (!res.ok) throw { message: data.error.message, statusCode: res.status }

  return data
}

export async function fetchBetaFace (imageUrl: string = 'http://betafaceapi.com/api_examples/sample.png'): Promise<BetaFaceAPIResponse> {
  if (NODE_ENV === 'development') return betaFaceMockResponse
  const fetchConfig = {
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
  }
  const res = await fetch('https://www.betafaceapi.com/api/v2/media', fetchConfig)
  const data = await res.json()

  if (!res.ok) throw { message: data.error_description, status: res.status }

  return data
}
