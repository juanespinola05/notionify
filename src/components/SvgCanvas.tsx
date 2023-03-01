import { ReactElement } from 'react'
import useCanvas from '../hooks/useCanvas'
// import SvgLayer from './SvgLayer'

interface IProps {
  svgList: string[]
}

function SvgCanvas ({ svgList }: IProps): ReactElement {
  const canvasRef = useCanvas(svgList)

  return (
    <canvas ref={canvasRef} width='306' height='306' />
  )
}

export default SvgCanvas
