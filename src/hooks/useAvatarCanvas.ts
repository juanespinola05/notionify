import { FC } from 'react'
import { svgComponents } from '../components/SVG'
import { useIllustrations } from '../context/illustration'
import { DownloadOptions } from '../types'
import { buildAvatarUrl } from '../utils/export'

const outfitEntries = Object.entries(svgComponents).filter(([key]) => key.includes('outfit'))
const outfitKeys = outfitEntries.map(([key]) => key)

// const IMAGE_DOWNLOAD_FORMAT = 'image/png'
interface AvatarCanvas {
  svgToRender: FC[]
  handleDownload: (options: DownloadOptions) => void
  hasBackground: boolean
  outfitOptions: string[]
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
    hasBackground
  }
}
