export interface PersonDetails {
  gender: 'female' | 'male'
  emotion: 'happiness' | 'sad' | 'angry' | 'normal' | 'glad' | 'neutral'
  cap: 'cap' | 'nocap'
  glasses: 'glasses' | 'noglasses'
  facialHair: 'beard' | 'mousthace' | 'sideburns' | 'none'
}

export type PersonDetailsKey = keyof PersonDetails

type ListOfOptions = string[][]

export interface SvgListType {
  gender: Record<PersonDetails['gender'], ListOfOptions>
  emotion: Record<PersonDetails['emotion'], ListOfOptions>
  cap: Record<PersonDetails['cap'], ListOfOptions>
  glasses: Record<PersonDetails['glasses'], ListOfOptions>
  facialHair: Record<PersonDetails['facialHair'], string[]>
}
