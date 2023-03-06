import { ReactElement } from 'react'
import { ReactComponent as BrandLogo } from '../assets/brand.svg'

export default function Footer (): ReactElement {
  return (
    <footer className='p-10 bg-black text-primary-content'>
      <div className='flex flex-col gap-y-4'>
        <div>
          <BrandLogo className='w-40' />
        </div>
        <hr className='bg-white w-full' />
        <div>
          <p className='font-bold'>
            Texto muy interesante
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
