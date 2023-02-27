import { ReactElement } from 'react'
import SvgLayer from './SvgLayer'

interface IProps {
  svgList: string[]
}

function SvgCanvas ({ svgList }: IProps): ReactElement {
  return (
    <div className='relative w-60 h-60'>
      {
        svgList.map(svg => <SvgLayer svg={svg} key={svg} />)
      }
    </div>
  )
}

export default SvgCanvas
