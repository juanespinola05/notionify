import { getGlasses, getHighestEmotion } from '../utils/detection'
import { getHead } from '../utils/head'
import { CloudinaryDetectionResponse, HeadDataBetaFaceAPI } from '../types'
import { getFacialHairBeta } from '../utils/facialHair'
import { useError } from '../context/error'

const initialState = {
  gender: '',
  emotion: '',
  glasses: '',
  head: '',
  facial_hair: ''
}

export function useDetection (): any {
  const detection = initialState
  const { setError } = useError()

  const setDetection = (detectionObject: CloudinaryDetectionResponse, face: HeadDataBetaFaceAPI): void => {
    if (detectionObject?.info?.detection?.adv_face?.data?.length > 1) {
      setError('You must upload an individual image')
      return
    }
    const data = detectionObject.info.detection.adv_face.data[0]
    if (face === undefined) {
      setError('No people found in the image')
      return
    }

    detection.gender = data.attributes.gender
    detection.emotion = getHighestEmotion(data.attributes.emotion)
    detection.glasses = getGlasses(data.attributes.glasses)
    detection.head = getHead({ face, gender: detection.gender as any })
    // detection.facial_hair = getFacialHair(data.attributes.facial_hair)
    detection.facial_hair = getFacialHairBeta(face.tags)
  }

  const resetDetection = (): void => {
    detection.gender = ''
    detection.emotion = ''
    detection.glasses = ''
    detection.head = ''
    detection.facial_hair = ''
  }

  return { detection, setDetection, resetDetection }
}
