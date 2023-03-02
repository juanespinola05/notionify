import { GlassesResponse, HairType, HeadData, HeadResponse, FacialHairData, HeadCategories, HeadDataBetaFaceAPI, BetaFaceAPITag, HairLengthValue, HeadInitialCategory, HeadCategory } from '../types'

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

// BETAFACE API UTILS
function getBaldCategory (hairTags: BetaFaceAPITag[]): HeadCategories {
  const category = 'bald'
  const hairSides = hairTags.find(tag => tag.name === 'hair sides')
  const hairTop = hairTags.find(tag => tag.name === 'hair top')
  const fullBald = hairSides?.value === 'very thin' && hairTop?.value === 'very short'
  return fullBald ? category : `${category}_short`
}

function getHairLengthGroup (hairLengthValue: HairLengthValue): HeadInitialCategory {
  const groups: Record<HairLengthValue, HeadInitialCategory> = {
    none: 'cut',
    short: 'cut',
    average: 'cut',
    long: 'large',
    'very short': 'cut',
    'very long': 'large'
  }
  return groups[hairLengthValue]
}

function getHairStyle (hairTags: BetaFaceAPITag[], gender: HeadDataBetaFaceAPI['gender']): HeadCategory {
  const hairLength = hairTags.find(tag => tag.name === 'hair length') as BetaFaceAPITag
  const group = getHairLengthGroup(hairLength.value as HairLengthValue)
  // TODO: EN ESTE PUNTO TAL VEZ HAYA QUE COMPARAR QUÉ PASA SI ES FEMALE
  if (group === 'large') { return `${gender}_large` }
  // en este punto "group" es "cut"

  // check if wavy or receding
  const wavyHair = hairTags.find(tag => tag.name === 'wavy hair')
  if (wavyHair?.value === 'yes') return 'male_cut_wavy'
  const receingHair = hairTags.find(tag => tag.name === 'receding hairline')
  if (receingHair?.value === 'yes') return 'male_cut_receding'

  // TODO: acá falta la lógica de hair sides y top
  const hairSides = hairTags.find(tag => tag.name === 'hair sides')
  const hairTop = hairTags.find(tag => tag.name === 'hair top')

  return 'male_cut_average_thick'
}

export function getHeadBetaApi ({ face, gender }: HeadDataBetaFaceAPI): HeadCategories {
  const { tags } = face
  const hairTags = tags.filter(tag => tag.name.includes('hair'))
  const bald = tags.find(tag => tag.name === 'bald')
  if (bald?.value === 'yes') return getBaldCategory(hairTags)

  return getHairStyle(hairTags, gender)
}
