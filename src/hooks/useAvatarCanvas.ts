import { FC } from 'react'
import { svgComponents } from '../components/SVG'
import { useIllustrations } from '../context/illustration'
import { DownloadOptions } from '../types'
import { buildAvatarUrl } from '../utils/export'
import { CONFIG_OUTFIT_ID, CONFIG_ACCESORY_ID } from '../constants'

const outfitEntries = Object.entries(svgComponents).filter(([key]) => key.includes(CONFIG_OUTFIT_ID))
const outfitKeys = outfitEntries.map(([key]) => key)

const accessoryEntries = Object.entries(svgComponents).filter(([key]) => key.includes(CONFIG_ACCESORY_ID))
const accessoryKeys = accessoryEntries.map(([key]) => key)

interface AvatarCanvas {
  svgToRender: FC[]
  handleDownload: (options: DownloadOptions) => void
  hasBackground: boolean
  outfitOptions: string[]
  accessoryOptions: string[]
}

export default function useAvatarCanvas (): AvatarCanvas {
  const { hasBackground, illustrationIdList } = useIllustrations()
  const svgToRender = illustrationIdList.map(id => svgComponents[id])

  const handleDownload: AvatarCanvas['handleDownload'] = (options): void => {
    const url = buildAvatarUrl({ ...options, illustrationIdList })
    const anchor = document.createElement('a')
    void fetch(url)
      .then(async res => await res.blob())
      .then(blob => {
        anchor.href = URL.createObjectURL(blob)
        anchor.download = 'avatar'
        anchor.click()
        anchor.remove()
      })
  }

  return {
    svgToRender,
    handleDownload,
    outfitOptions: outfitKeys,
    accessoryOptions: accessoryKeys,
    hasBackground
  }
}
