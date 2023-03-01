import { RefObject, useEffect, useRef, useState } from 'react'

export default function useAvatarCanvas (svgList: string[]): RefObject<HTMLCanvasElement> {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [svgStrings, setSvgStrings] = useState<string[]>([])

  async function fetchSvg (svgList: string[]): Promise<string[]> {
    const promises = svgList.map(async svg => await fetch(`./svgs/${svg}`))
    const responses = await Promise.all(promises)

    const textPromises = responses.map(async res => await res.text())
    const strings = await Promise.all(textPromises)
    return strings
  }

  useEffect(() => {
    fetchSvg(svgList)
      .then(strings => {
        setSvgStrings(strings)
      })
      .catch(console.error)
  }, [svgList])

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    svgStrings.forEach((string, index) => {
      let finalSVG = string
      if (index === 0) finalSVG = string.replace(/currentColor/g, '%23713F12')
      const img = new Image()
      img.onload = () => {
        ctx.drawImage(img, 0, 0)
      }
      img.src = `data:image/svg+xml;charset=utf-8, ${finalSVG}`
    })
  }, [svgStrings])

  return canvasRef
}
