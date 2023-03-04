import { BetaFaceAPITag } from '../types'
import { findTag } from './head'

export function getFacialHairBeta (tags: BetaFaceAPITag[]): string {
  const hasMustache = findTag('mustache', tags) === 'yes'
  const hasBeard = findTag('beard', tags) === 'yes'
  const hasSideburns = findTag('sideburns', tags) === 'yes'
  const mustacheLength = findTag('hair mustache', tags) ?? 'none'
  const beardLength = findTag('hair beard', tags) ?? 'none'
  const facialHairCategory = []

  if (hasBeard) {
    if (beardLength !== 'thick') facialHairCategory.push('beard_short')
    else facialHairCategory.push('beard')
  }
  if (hasMustache) {
    if (mustacheLength !== 'thick') facialHairCategory.push('mustache_short')
    else facialHairCategory.push('mustache')
  }
  if (hasSideburns) facialHairCategory.push('sideburns')
  return facialHairCategory.join('_')
}
