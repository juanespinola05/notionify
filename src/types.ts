// type EmotionsType = 'anger' | 'contempt' | 'disgust' | 'fear' | 'happiness' | 'neutral' | 'sadness' | 'surprise'

export interface PersonDetails {
  gender: 'female' | 'male'
  emotion: 'anger' | 'contempt' | 'disgust' | 'fear' | 'happiness' | 'neutral' | 'sadness' | 'surprise'
  glasses: 'no_glasses' | 'reading_glasses' | 'sunglasses'
  head: 'female_cap' | 'male_medium' | 'male_cut' | 'male_bald' | 'male_large' | 'female_medium' | 'female_large' | 'female_bald' | 'male_cut_cap' | 'male_medium_cap' | 'male_bald_cap' | 'male_large_cap'
  facial_hair: 'beard' | 'beard_sideburns' | 'beard_moustache_sideburns' | 'beard_moustache' | 'moustache' | 'none'
}

export type GlassesResponse = 'NoGlasses' | 'ReadingGlasses' | 'Sunglasses'

export type HeadResponse = 'female_cap' | 'male_medium' | 'male_cut' | 'male_bald' | 'male_large' | 'female_medium' | 'female_large' | 'female_bald' | 'male_cut_cap' | 'male_medium_cap' | 'male_bald_cap' | 'male_large_cap'

export interface HairData {
  bald: number
  invisible: boolean
  haircolor: []
}

export interface FacialHairData {
  moustache: number
  beardinvisible: number
  sideburns: number
}

export interface AccessoriesData {
  type: string
  confidence: number
}

export interface HeadData {
  hair: HairData
  accessories: AccessoriesData[]
  gender: string
}

export type HairType = 'cut' | 'medium' | 'large' | 'bald'

export type PersonDetailsKey = keyof PersonDetails

type ListOfOptions = string[][]

export interface SvgListType {
  gender: Record<PersonDetails['gender'], ListOfOptions>
  emotion: Record<PersonDetails['emotion'], ListOfOptions>
  glasses: Record<PersonDetails['glasses'], ListOfOptions>
  facial_hair: Record<PersonDetails['facial_hair'], ListOfOptions>
  head: Record<PersonDetails['head'], ListOfOptions>
}

// BETAFACE API types

export type HeadInitialCategory = 'cut' | 'large'

export type HeadCategory = 'bald' | 'bald_short' | 'male_cut_wavy' | 'male_cut_average_thick' | 'male_cut_average_average' | 'male_cut_thin_thin' | 'male_cut_thick_thick' | 'male_cut_receding' | 'male_large' | 'female_large'

export interface BetaFaceAPITag {
  name: string
  value: string
  confidence: number
}

export interface HeadDataBetaFaceAPI {
  face: {
    tags: BetaFaceAPITag[]
  }
  gender: PersonDetails['gender']
}

export type HairLengthValue = 'none' | 'short' | 'very short' | 'average' | 'long' | 'very long'
