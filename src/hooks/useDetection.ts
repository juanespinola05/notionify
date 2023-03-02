import { getGlasses, getHighestEmotion, getFacialHair, getHeadBetaApi } from '../utils/detection'
import betaFaceApiMock from '../../detectionObjectMockBetaFace.json'

const initialState = {
  gender: '',
  emotion: '',
  glasses: '',
  head: '',
  facial_hair: ''
}

export function useDetection (): any {
  const detection = initialState

  const setDetection = (detectionObject: any): void => {
    if (detectionObject.info.detection.adv_face.data.length > 1) throw new Error('You must upload an individual image')
    const data = detectionObject.info.detection.adv_face.data[0]
    const face = betaFaceApiMock?.media?.faces?.at(0)
    if (face === undefined) throw new Error('No people found in the image')

    detection.gender = data.attributes.gender
    detection.emotion = getHighestEmotion(data.attributes.emotion)
    detection.glasses = getGlasses(data.attributes.glasses)
    // detection.head = getHead({ gender: data.attributes.gender, accessories: data.attributes.accessories, hair: data.attributes.hair })
    detection.head = getHeadBetaApi(face)
    detection.facial_hair = getFacialHair(data.attributes.facial_hair)
  }

  return { detection, setDetection }
}
