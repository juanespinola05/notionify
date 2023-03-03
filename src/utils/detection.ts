import { GlassesResponse, HairType, HeadData, HeadResponse, FacialHairData } from '../types'

const GLASSES_MAP: Record<GlassesResponse, string> = {
  NoGlasses: 'no_glasses',
  ReadingGlasses: 'reading_glasses',
  Sunglasses: 'sunglasses'
}

export function getHighestEmotion (emotionObject: Record<string, number>): string {
  const highestEmotionValue = Math.max.apply(null, Object.values(emotionObject))
  const highestEmotion = Object.keys(emotionObject).find(emotion => emotionObject[emotion] === highestEmotionValue)

  return highestEmotion ?? 'neutral'
}

export const getGlasses = (glass: GlassesResponse = 'NoGlasses'): string => GLASSES_MAP[glass]

function getTypeOfHair (baldPercentage: number): HairType {
  const percentage = Math.round(baldPercentage * 100)

  if (percentage >= 0 && percentage < 7) return 'large'
  if (percentage >= 7 && percentage < 14) return 'cut'
  if (percentage >= 14 && percentage < 66) return 'medium'
  if (percentage >= 66 && percentage <= 100) return 'bald'

  return 'medium'
}

export function getHead (headObject: HeadData): HeadResponse {
  const hasHeadwear = headObject.accessories.some((accessory) => accessory.type === 'headwear')
  const hasHat = headObject.hair.invisible || hasHeadwear

  const isMale = headObject.gender === 'male'
  const typeOfHair = getTypeOfHair(headObject.hair.bald)

  if (isMale) return hasHat ? `male_${typeOfHair}_cap` : `male_${typeOfHair}`
  // @ts-expect-error
  else return hasHat ? 'female_cap' : `female_${typeOfHair}`
}

export function getFacialHair (facialHairObject: FacialHairData): string {
  const facialHairCategory = Object.entries(facialHairObject)
    .sort(([hairStyleA], [hairStyleB]) => hairStyleA.localeCompare(hairStyleB))
    .map(([hairStyle, percentage]) => Math.round(percentage * 100) >= 60 && hairStyle)
    .filter(Boolean)
    .join('_')
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return facialHairCategory || 'none'
}
