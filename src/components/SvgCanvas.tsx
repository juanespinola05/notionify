import { ReactElement } from 'react'
import useAvatarCanvas from '../hooks/useAvatarCanvas'

interface IProps {
  svgList: string[]
  width?: number
  height?: number
}

function SvgCanvas ({ svgList, width = 306, height = 306 }: IProps): ReactElement {
  const { canvasRef, downloadUrl, ready, loading } = useAvatarCanvas(svgList)

  return (
    <>
      {loading && <p>Loading..</p>}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
      />
      {
        ready && (
          <a
            href={downloadUrl}
            download='avatar' className='block px-4 py-2 bg-blue-800 text-white'
          >
            Descargar Avatar
          </a>
        )
      }
    </>
  )
}

export default SvgCanvas
