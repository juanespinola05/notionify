import { ReactElement } from 'react'
import useAvatarCanvas from '../hooks/useAvatarCanvas'

interface IProps {
  svgList: string[]
  width?: number
  height?: number
}

function SvgCanvas ({ svgList, width = 306, height = 306 }: IProps): ReactElement {
  const { svgToRender, handleDownload } = useAvatarCanvas(svgList)

  return (
    <>
      <div className='relative w-[320px] h-[320px]'>
        {
          svgToRender.map((Svg, index) => {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!Svg) return null
            return (
              <div key={index} className='top-0 absolute w-full h-full'>
                <Svg />
              </div>
            )
          })
        }
      </div>
      <button
        onClick={handleDownload}
        className='block px-4 py-2 bg-blue-800 text-white'
      >
        Descargar Avatar
      </button>
    </>
  )
}

export default SvgCanvas
