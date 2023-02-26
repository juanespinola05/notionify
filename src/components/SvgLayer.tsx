import { ReactElement } from 'react'

function SvgLayer ({ svg }: { svg: string }): ReactElement {
  return (
    <img
      className='w-full h-full absolute'
      src={`./svgs/${svg}`}
      alt=''
    />
  )
}

export default SvgLayer
