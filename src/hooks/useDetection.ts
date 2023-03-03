import { getGlasses, getHighestEmotion, getFacialHair } from '../utils/detection'
import { getHead } from '../utils/head'
import { CloudinaryDetectionResponse, HeadDataBetaFaceAPI } from '../types'

const initialState = {
  gender: '',
  emotion: '',
  glasses: '',
  head: '',
  facial_hair: ''
}

export function useDetection (): any {
  const detection = initialState

  const setDetection = (detectionObject: CloudinaryDetectionResponse, face: HeadDataBetaFaceAPI['face']): void => {
    if (detectionObject.info.detection.adv_face.data.length > 1) throw new Error('You must upload an individual image')
    const data = detectionObject.info.detection.adv_face.data[0]
    if (face === undefined) throw new Error('No people found in the image')

    detection.gender = data.attributes.gender
    detection.emotion = getHighestEmotion(data.attributes.emotion)
    detection.glasses = getGlasses(data.attributes.glasses)
    detection.head = getHead({ face, gender: detection.gender as any })
    detection.facial_hair = getFacialHair(data.attributes.facial_hair)
  }

  return { detection, setDetection }
}
