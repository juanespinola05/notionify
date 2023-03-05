
import { ReactElement } from 'react'
import { IconProps } from '../../types'

export default function Stars ({ className }: IconProps): ReactElement<SVGElement> {
  return (
    <svg width='45' height='41' viewBox='0 0 45 41' fill='none' className={className} xmlns='http://www.w3.org/2000/svg'>
      <path d='M17.05 34.05L11.7 22.35L0 17L11.6875 11.7031L17.05 0L22.3625 11.7031L34.1 17L22.35 22.35L17.05 34.05ZM36.1 40.1L33.4438 34.2063L27.55 31.6L33.4438 28.8938L36.1 23.05L38.7563 28.8938L44.6 31.6L38.7563 34.2063L36.1 40.1Z' fill='white' />
    </svg>

  )
}
