import { ReactElement } from 'react'
import useAvatarCanvas from '../hooks/useAvatarCanvas'
import { svgComponents } from './SVG'

interface IProps {
  svgList: string[]
  width?: number
  height?: number
}

function SvgCanvas ({ svgList, width = 306, height = 306 }: IProps): ReactElement {
  const {
    svgToRender,
    handleDownload,
    hasBackground,
    toggleBackground,
    outfitOptions,
    outfitSelection,
    changeSelection
  } = useAvatarCanvas(svgList)

  return (
    <>
      <div className='relative overflow-hidden w-[320px] h-[320px]'>
        {
          svgToRender.map((Svg, index) => {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!Svg) return null
            return (
              <div key={index} className='top-0 absolute w-full '>
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
      {
        (svgList.length > 0) && (
          <button
            onClick={toggleBackground}
            className='block px-4 py-2 bg-blue-800 text-white'
          >
            {hasBackground ? 'Desactivar' : 'Activar'} fondo
          </button>
        )
      }
      <div className='flex  flex-wrap'>
        {
          outfitOptions.map(option => {
            const Element = svgComponents[option]
            return (
              <div key={option} className={`overflow-hidden h-40 w-40 ${option === outfitSelection ? 'border-green-500 border-2' : ''}`}>
                <button onClick={() => changeSelection(option)}>Elegir</button>
                <Element />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default SvgCanvas
