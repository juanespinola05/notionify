import { getGlasses, getHighestEmotion, getHead, getFacialHair } from '../utils/detection'

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

    detection.gender = data.attributes.gender
    detection.emotion = getHighestEmotion(data.attributes.emotion)
    detection.glasses = getGlasses(data.attributes.glasses)
    detection.head = getHead({ gender: data.attributes.gender, accessories: data.attributes.accessories, hair: data.attributes.hair })
    detection.facial_hair = getFacialHair(data.attributes.facial_hair)
  }

  return { detection, setDetection }
}
