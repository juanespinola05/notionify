export interface PersonDetails {
  gender: 'female' | 'male'
  emotion: 'anger' | 'contempt' | 'disgust' | 'fear' | 'happiness' | 'neutral' | 'sadness' | 'surprise'
  glasses: 'no_glasses' | 'reading_glasses' | 'sunglasses'
  head: 'female_cap' | 'male_medium' | 'male_cut' | 'male_bald' | 'male_large' | 'female_medium' | 'female_large' | 'female_bald' | 'male_cut_cap' | 'male_medium_cap' | 'male_bald_cap' | 'male_large_cap'
  facial_hair: 'beard' | 'beard_sideburns' | 'beard_siderburs_moustache' | 'beard_moustache' | 'moustache' | 'none'
}

export type PersonDetailsKey = keyof PersonDetails

type ListOfOptions = string[][]

export interface SvgListType {
  gender: Record<PersonDetails['gender'], ListOfOptions>
  emotion: Record<PersonDetails['emotion'], ListOfOptions>
  glasses: Record<PersonDetails['glasses'], ListOfOptions>
  facial_hair: Record<PersonDetails['facial_hair'], ListOfOptions>
  head: Record<PersonDetails['head'], ListOfOptions>
}
