// type EmotionsType = 'anger' | 'contempt' | 'disgust' | 'fear' | 'happiness' | 'neutral' | 'sadness' | 'surprise'

export interface PersonDetails {
  gender: 'female' | 'male'
  emotion: 'anger' | 'contempt' | 'disgust' | 'fear' | 'happiness' | 'neutral' | 'sadness' | 'surprise'
  glasses: 'no_glasses' | 'reading_glasses' | 'sunglasses'
  head: 'female_cap' | 'male_medium' | 'male_cut' | 'male_bald' | 'male_large' | 'female_medium' | 'female_large' | 'female_bald' | 'male_cut_cap' | 'male_medium_cap' | 'male_bald_cap' | 'male_large_cap'
  facial_hair: 'beard' | 'beard_sideburns' | 'beard_siderburs_mustache' | 'beard_mustache' | 'mustache'
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
