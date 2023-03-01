import { ReactElement } from 'react'
import useAvatarCanvas from '../hooks/useAvatarCanvas'
// import SvgLayer from './SvgLayer'

interface IProps {
  svgList: string[]
}

function SvgCanvas ({ svgList }: IProps): ReactElement {
  const canvasRef = useAvatarCanvas(svgList)

  return (
    <canvas ref={canvasRef} width='306' height='306' />
  )
}

export default SvgCanvas
