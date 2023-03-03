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

    // TODO: a veces algunos elementos cargan más rápido que otros y se pintan en un orden distinto al esperado.
    // Iterate SVGs and add them to canvas
    svgStrings.forEach((string, index) => {
      const img = new Image()
      // if its PNG, use the direct URL, otherwise use data64 XML
      img.src = string.split('.')[1] === 'png'
        ? `./svgs/${string}`
        : `data:image/svg+xml;charset=utf-8, ${string}`
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      }
    })
    // TODO: Fix this to not use interval
    setTimeout(() => {
      setDownloadUrl(canvas.toDataURL(IMAGE_DOWNLOAD_FORMAT))
    }, 700)
  }, [svgStrings])

  return {
    canvasRef,
    loading,
    downloadUrl,
    ready: svgList.length > 0
  }
}
