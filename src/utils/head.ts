import { HeadCategory, HeadDataBetaFaceAPI, BetaFaceAPITag, HairLengthValue, HeadInitialCategory, GenderType } from '../types'
import { getCutHairStyle } from './hairstyle'

export const findTag = (targetTag: string, tags: BetaFaceAPITag[]): string | undefined => tags.find((tag) => tag.name === targetTag)?.value

export function getHead ({ face, gender }: { face: HeadDataBetaFaceAPI, gender: GenderType }): HeadCategory {
  const { tags } = face
  const hairTags = tags.filter(tag => tag.name.includes('hair'))
  const isBald = tags.find(tag => tag.name === 'bald')?.value === 'yes'

  return isBald ? getBaldStyle(hairTags) : getHairStyle(hairTags, gender)
}

function getBaldStyle (hairTags: BetaFaceAPITag[]): HeadCategory {
  const hairSides = findTag('hair sides', hairTags) ?? 'very thin'
  const hairTop = findTag('hair top', hairTags) ?? 'very short'

  const isFullBald = hairSides === 'very thin' && hairTop === 'very short'

  return isFullBald ? 'bald' : 'bald_short'
}

// TODO: create a map
function getHairCategory (hairLengthValue: HairLengthValue): HeadInitialCategory {
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

function getHairStyle (hairTags: BetaFaceAPITag[], gender: GenderType): HeadCategory {
  const hairLength = hairTags.find(tag => tag.name === 'hair length')?.value ?? 'cut'
  const hairCategory = getHairCategory(hairLength as HairLengthValue)

  if (hairCategory === 'large' || gender === 'female') return `${gender}_large`

  // TODO: agregar isWavy female 🧘🏻‍♂️
  const isWavy = hairTags.find(tag => tag.name === 'wavy hair')?.value === 'yes'
  if (isWavy) return 'male_cut_wavy'

  const isReceingHair = hairTags.find(tag => tag.name === 'receding hairline')?.value === 'yes'
  if (isReceingHair) return 'male_cut_receding'

  return getCutHairStyle(hairTags)
}
