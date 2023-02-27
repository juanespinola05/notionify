import { PersonDetails } from '../types'
import svgList from '../constants/svgList'

export function getRandomCombination (combinations: string[][]): string[] {
  return combinations[Math.floor(Math.random() * combinations.length)]
}

export function mapDetailsToSvg (details: Partial<PersonDetails>): string[] {
  const entries = Object.entries(details)
  const avatarSvgs = entries.flatMap(([key, value]) => {
    const detail = svgList[key as keyof typeof svgList]

    return getRandomCombination(detail[value as keyof typeof detail])
  })

  avatarSvgs.sort((a) => a.includes('cap') ? -1 : 1)
  avatarSvgs.sort((a) => a.includes('head') ? -1 : 1)
  return avatarSvgs
}
