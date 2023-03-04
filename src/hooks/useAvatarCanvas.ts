import { FC, useEffect, useState } from 'react'
import { svgComponents } from '../components/SVG'

const outfitEntries = Object.entries(svgComponents).filter(([key]) => key.includes('outfit'))
const outfitKeys = outfitEntries.map(([key]) => key)

// const IMAGE_DOWNLOAD_FORMAT = 'image/png'
const BACKGROUND_SVG = 'background'
interface AvatarCanvas {
  downloadUrl: string | undefined
  svgToRender: FC[]
  handleDownload: () => void
  toggleBackground: () => void
  hasBackground: boolean
  outfitOptions: string[]
  outfitSelection: string
  changeSelection: (str: string) => void
}

export default function useAvatarCanvas (svgList: string[]): AvatarCanvas {
  const [downloadUrl, setDownloadUrl] = useState('')
  const [svgToRender, setSvgToRender] = useState<FC[]>([])
  const [background, setBackground] = useState(true)
  const [outfitSelection, setOutfitSelection] = useState<string>(outfitKeys[0])

  const toggleBackground = (): void => setBackground(prev => !prev)

  const changeSelection: AvatarCanvas['changeSelection'] = (newSelection) => {
    setOutfitSelection(newSelection)
  }

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

    if (background && svgNames.length > 0) svgNames.splice(0, 0, BACKGROUND_SVG)
    else if (!background && svgNames[1] === BACKGROUND_SVG) {
      svgNames.splice(1, 1)
    }

    svgNames.splice(0, 0, outfitSelection)
    const svgToRender = svgNames.map(name => svgComponents[name])

    setSvgToRender(svgToRender)

    const url = `https://notion-avatar.deno.dev?layers=${svgNames.join(';')}`
    setDownloadUrl(url)
  }, [svgList, background, outfitSelection])

  return {
    downloadUrl,
    svgToRender,
    handleDownload,
    toggleBackground,
    changeSelection,
    outfitSelection,
    hasBackground: background,
    outfitOptions: outfitKeys
  }
}
