import { BetaFaceAPITag, HeadCategory } from '../types'

export function getCutHairStyle (hairTags: BetaFaceAPITag[]): HeadCategory {
  const hairSideTag = hairTags.find((tag) => tag.name === 'hair sides')?.value ?? 'default'
  const hairTopTag = hairTags.find((tag) => tag.name === 'hair top')?.value ?? 'default'

  const NORMALIZE_HAIR_CATEGORIES_MAP = {
    'very thin': 'thin',
    thin: 'thin',
    average: 'average',
    thick: 'thick',
    'very short': 'thin',
    short: 'thin',
    'very thick': 'thick'
  }

  const normalizedHairSide = NORMALIZE_HAIR_CATEGORIES_MAP[hairSideTag as keyof typeof NORMALIZE_HAIR_CATEGORIES_MAP]
  const normalizedHairTop = NORMALIZE_HAIR_CATEGORIES_MAP[hairTopTag as keyof typeof NORMALIZE_HAIR_CATEGORIES_MAP]

  const categoryCombinations = {
    average_thick: {
      sides: ['thin', 'average'],
      top: ['thick']
    },
    average_average: {
      sides: ['thin', 'average'],
      top: ['average']
    },
    thin_thin: {
      sides: ['thin'],
      top: ['thin']
    },
    thick_thick: {
      sides: ['thick'],
      top: ['thick']
    }
  }
  const values = Object.values(categoryCombinations)
  const keys = Object.keys(categoryCombinations)
  const combinationIndex = values.findIndex(({ sides, top }) => {
    return sides.includes(normalizedHairSide) && top.includes(normalizedHairTop)
  })

  // @ts-expect-error
  return combinationIndex === -1 ? 'default' : `male_cut_${keys[combinationIndex]}`
}
