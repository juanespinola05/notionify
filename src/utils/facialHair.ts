import { BetaFaceAPITag } from '../types'
import { findTag } from './head'

export function getFacialHairBeta (tags: BetaFaceAPITag[]): string {
  const hasBeard = findTag('beard', tags) === 'yes'
  // no beard, no facial hair
  if (!hasBeard) return ''
  const beardLength = findTag('hair beard', tags) ?? 'none'
  if (beardLength !== 'thick') return 'beard_short'
  // else
  const facialHairCategory = []
  facialHairCategory.push('beard')

  const hasMustache = findTag('mustache', tags) === 'yes'
  if (hasMustache) facialHairCategory.push('mustache')

  const hasSideburns = findTag('sideburns', tags) === 'yes'
  if (hasSideburns) facialHairCategory.push('sideburns')

  return facialHairCategory.join('_')
}
