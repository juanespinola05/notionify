import { ReactElement, ReactNode } from 'react'
import { ReactComponent as BrandLogo } from '../assets/brand.svg'
import { ReactComponent as CloudinaryLogo } from '../assets/cloudinary.svg'
import MidudevLogo from '../assets/midudev.png'

export default function Footer (): ReactElement {
  return (
    <footer className='bg-heroBackground text-primary-content'>
      <div className='flex flex-col p-10 gap-y-4 items-center bg-[rgba(0,0,0,.85)]'>
        <div>
          <BrandLogo className='w-40' />
        </div>
        <hr className='bg-white w-full' />
        <div className='text-center'>
          <p className='font-medium'>
            This tool was built for Midudev's Hackathon
          </p>
          <div className='flex gap-2 justify-center'>
            <Link href='https://cloudinary.com'>
              <CloudinaryLogo style={{ width: '100px' }} />
            </Link>
            <Link href='https://midu.dev'>
              <img src={MidudevLogo} alt='' className='w-24' />
            </Link>
          </div>
          <p className='mt-2 text-sm'>All credits to <Link href='https://www.drawkit.com/product/notion-style-avatar-creator'>DrawKit</Link> for set of illustrations</p>
        </div>
      </div>
    </footer>
  )
}

function Link ({ children, href }: { children: ReactNode, href: string }): ReactElement {
  return (
    <a href={href} rel='noreferrer' className='underline underline-offset-4'>
      {children}
    </a>
  )
}
