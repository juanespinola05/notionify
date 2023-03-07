import { ReactElement } from 'react'
import useAvatarCanvas from '../hooks/useAvatarCanvas'

interface IProps {
  width?: number
  height?: number
}

function Canvas ({ width = 306, height = 306 }: IProps): ReactElement {
  const { svgToRender, hasBackground } = useAvatarCanvas()

  return (
    <div className={`relative m-auto overflow-hidden w-80 h-80 ${hasBackground ? 'clip-illustration' : ''}`}>
      {
          svgToRender.map((Svg, index) => {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!Svg) return null
            return (
              <div key={index} className='top-0 absolute w-full'>
                <Svg />
              </div>
            )
          })
        }
    </div>
  )
}

export default Canvas
