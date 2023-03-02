import { RefObject, useEffect, useRef, useState } from 'react'
import { fetchSvg } from '../utils/svg'

const IMAGE_DOWNLOAD_FORMAT = 'image/png'
interface AvatarCanvas {
  downloadUrl: string | undefined
  canvasRef: RefObject<HTMLCanvasElement>
  loading: boolean
  ready: boolean
}

export default function useAvatarCanvas (svgList: string[]): AvatarCanvas {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [svgStrings, setSvgStrings] = useState<string[]>([])
  const [downloadUrl, setDownloadUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchSvg(svgList)
      .then(strings => setSvgStrings(strings))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [svgList])

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    // reset canvas to avoid conflicts
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    svgStrings.forEach((string, index) => {
      const finalSVG = string
      // if (index === 0) finalSVG = string.replace(/currentColor/g, '%23713F12')
      const img = new Image()
      img.onload = () => {
        ctx.drawImage(img, 0, 0)
      }
      img.src = `data:image/svg+xml;charset=utf-8, ${finalSVG}`
    })
    // TODO: Fix this to not use interval
    setTimeout(() => {
      setDownloadUrl(canvas.toDataURL(IMAGE_DOWNLOAD_FORMAT))
    }, 500)
  }, [svgStrings])

  return {
    canvasRef,
    loading,
    downloadUrl,
    ready: svgStrings.length > 0
  }
}
