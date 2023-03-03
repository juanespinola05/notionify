import { PersonDetails } from '../types'
import svgList from '../constants/svgList'

export function getRandomCombination (combinations: string[][]): string[] {
  return combinations[Math.floor(Math.random() * combinations.length)]
}

export function mapDetailsToSvg (details: Partial<PersonDetails>): string[] {
  const entries = Object.entries(details)
  const avatarSvgs = entries.flatMap(([key, value]) => {
    const detail = svgList[key as keyof typeof svgList]

    return getRandomCombination(detail[value as keyof typeof detail]) ?? []
  })

  avatarSvgs.sort((a, b) => Number(a.at(0)) - Number(b.at(0)))
  return avatarSvgs
}

export async function fetchSvg (svgList: string[]): Promise<string[]> {
  const strings = await Promise.all(
    svgList
      .map(async svg => {
        if (svg.split('.')[1] === 'png') return await Promise.resolve(svg)
        return await fetch(`./svgs/${svg}`).then(async res => await res.text())
      })
  )

  return strings
}
