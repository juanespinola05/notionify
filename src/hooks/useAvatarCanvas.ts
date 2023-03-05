import { FC, useEffect, useState } from 'react'
import { svgComponents } from '../components/SVG'
import { useIllustrations } from '../context/illustration'

const outfitEntries = Object.entries(svgComponents).filter(([key]) => key.includes('outfit'))
const outfitKeys = outfitEntries.map(([key]) => key)

// const IMAGE_DOWNLOAD_FORMAT = 'image/png'
interface AvatarCanvas {
  downloadUrl: string | undefined
  svgToRender: FC[]
  handleDownload: () => void
  hasBackground: boolean
  outfitOptions: string[]
}

export default function useAvatarCanvas (): AvatarCanvas {
  const { hasBackground, illustrationIdList } = useIllustrations()
  const [downloadUrl, setDownloadUrl] = useState('')
  const [svgToRender, setSvgToRender] = useState<FC[]>([])
  console.log(illustrationIdList)

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
    // ? if it has short beard, remove first head and find matching head for that beard
    // const shortBeardSVG = illustrationIdList.find(svg => /3_beard_\d/ig.test(svg))
    // if (shortBeardSVG !== undefined) {
    //   const headIndex = illustrationIdList.findIndex(svg => svg.startsWith('1_head_'))
    //   illustrationIdList.splice(headIndex, 1, `1_head_${shortBeardSVG.at(-1) as string}`)
    // }

    const svgToRender = illustrationIdList.map(name => svgComponents[name])
    setSvgToRender(svgToRender)

    const url = `https://notion-avatar.deno.dev?layers=${illustrationIdList.join(';')}`
    setDownloadUrl(url)
  }, [])

  return {
    downloadUrl,
    svgToRender,
    handleDownload,
    outfitOptions: outfitKeys,
    hasBackground
  }
}
