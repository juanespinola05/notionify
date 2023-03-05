import { PersonDetails } from '../types'
import svgList from '../constants/svgList'

export function getRandomCombination (combinations: string[][] = [[]]): string[] {
  return combinations[Math.floor(Math.random() * combinations.length)]
}

export function mapDetailsToSvg (details: Partial<PersonDetails>): string[] {
  const entries = Object.entries(details)
  const avatarSvgs = entries.flatMap(([key, value]) => {
    const detail = svgList[key as keyof typeof svgList]

    return getRandomCombination(detail[value as keyof typeof detail]) ?? []
  })

  avatarSvgs.sort((a, b) => {
    const A = Number(a.at(0))
    const B = Number(b.at(0))
    if (isNaN(A)) return 0
    if (isNaN(B)) return -1
    return A - B
  })
  return avatarSvgs
}

export async function fetchSvg (svgList: string[]): Promise<string[]> {
  const strings = await Promise.all(
    svgList
      .map(async svg => {
        if (svg.endsWith('png')) return await Promise.resolve(svg)
        return await fetch(`./svgs/${svg}`).then(async res => await res.text())
      })
  )

  return strings
}
