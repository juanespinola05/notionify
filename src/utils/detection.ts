import { GlassesResponse, HairType, HeadResponse, FacialHairData, CloudinaryEntryAttributes, EmotionsType } from '../types'

const GLASSES_MAP: Record<GlassesResponse, string> = {
  NoGlasses: 'no_glasses',
  ReadingGlasses: 'reading_glasses',
  Sunglasses: 'sunglasses'
}

export function getHighestEmotion (emotionObject: Record<EmotionsType, number>): string {
  const highestEmotionValue = Math.max.apply(null, Object.values(emotionObject))
  const highestEmotion = Object.keys(emotionObject).find(emotion => emotionObject[emotion as EmotionsType] === highestEmotionValue)

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

// ! This function should not be used
export function getHead (headObject: CloudinaryEntryAttributes): HeadResponse {
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
  return facialHairCategory === '' ? 'none' : facialHairCategory
}
