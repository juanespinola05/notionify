import { FC, useEffect, useState } from 'react'
import { svgComponents } from '../components/SVG'

// const IMAGE_DOWNLOAD_FORMAT = 'image/png'
interface AvatarCanvas {
  downloadUrl: string | undefined
  svgToRender: FC[]
  handleDownload: () => void
}

export default function useAvatarCanvas (svgList: string[]): AvatarCanvas {
  const [downloadUrl, setDownloadUrl] = useState('')
  const [svgToRender, setSvgToRender] = useState<FC[]>([])

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
    setSvgToRender(svgToRender)
    const url = `https://notion-avatar.deno.dev?layers=${svgNames.join(';')}`
    setDownloadUrl(url)
  }, [svgList])

  return {
    downloadUrl,
    svgToRender,
    handleDownload
  }
}
