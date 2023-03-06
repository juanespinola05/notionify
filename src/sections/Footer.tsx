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
            This tool was built for a Hackathon x&nbsp;
            <a href='https://cloudinary.com' rel='noreferrer' className='underline'>Cloudinary</a>
            &nbsp; & &nbsp;
            <a href='https://midu.dev' rel='noreferrer' className='underline'>Midudev</a>
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
