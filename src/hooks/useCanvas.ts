import { RefObject, useEffect, useRef } from 'react'

export default function useCanvas (svgList: string[]): RefObject<HTMLCanvasElement> {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  console.log(svgList)
  useEffect(() => {
    const canvas = canvasRef.current
    console.log(canvas)
    const ctx = canvas.getContext('2d')

    svgList.forEach(svg => {
      const img = new Image()
      img.onload = () => {
        ctx.drawImage(img, 0, 0)
      }
      img.src = `./svgs/${svg}`
    })
  }, [svgList])

  return canvasRef
}
