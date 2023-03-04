import { FC, useEffect, useState } from 'react'
import { svgComponents } from '../components/SVG'

// const IMAGE_DOWNLOAD_FORMAT = 'image/png'
const BACKGROUND_SVG = 'background'
const backgroundComponent = svgComponents[BACKGROUND_SVG]
interface AvatarCanvas {
  downloadUrl: string | undefined
  svgToRender: FC[]
  handleDownload: () => void
  toggleBackground: () => void
  hasBackground: boolean
}

export default function useAvatarCanvas (svgList: string[]): AvatarCanvas {
  const [downloadUrl, setDownloadUrl] = useState('')
  const [svgToRender, setSvgToRender] = useState<FC[]>([])
  const [background, setBackground] = useState(true)

  const toggleBackground = (): void => setBackground(prev => !prev)

  const handleDownload = (): void => {
    const anchor = document.createElement('a')
    void fetch(downloadUrl)
      .then(async res => await res.blob())
      .then(blob => {
        anchor.href = URL.createObjectURL(blob)
        anchor.download = 'avatar'
        anchor.click()
        anchor.remove()
      })
  }

  useEffect(() => {
    const svgNames = svgList.map(str => str.split('.')[0])
    const svgToRender = svgNames.map(name => svgComponents[name])
    if (background && svgNames.length > 0) svgToRender.splice(0, 0, backgroundComponent)
    else if (!background && svgToRender[0].name === BACKGROUND_SVG) {
      svgToRender.splice(0, 1)
    }

    setSvgToRender(svgToRender)

    const url = `https://notion-avatar.deno.dev?layers=${svgNames.join(';')}`
    setDownloadUrl(url)
  }, [svgList, background])

  return {
    downloadUrl,
    svgToRender,
    handleDownload,
    toggleBackground,
    hasBackground: background
  }
}
