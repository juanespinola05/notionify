import { ReactElement } from 'react'
import { ReactComponent as CloudinaryLogo } from '../assets/cloudinary.svg'
import MidudevLogo from '../assets/midudev.png'

export default function Footer (): ReactElement {
  return (
    <footer className='bg-heroBackground text-primary-content'>
      <div className='flex flex-col p-10 gap-y-4 items-center bg-[rgba(0,0,0,.85)]'>

        <p className='font-medium text-sm text-gray-200 badge badge-ghost bg-opacity-40'>
          Tool built for Midudev's Hackathon
        </p>
        <div className='w-full h-0.5 bg-gray-600 bg-opacity-80' />
        <div className='text-center'>

          <div className='flex gap-2 justify-center'>
            <Link href='https://cloudinary.com' target='_blank' rel='noopener noreferrer'>
              <CloudinaryLogo style={{ width: '100px', color: 'white' }} />
            </Link>
            <Link href='https://midu.dev' target='_blank' rel='noopener noreferrer'>
              <img src={MidudevLogo} alt='' className='w-24' />
            </Link>
          </div>
          <p className='mt-2 text-sm'>All credits to <Link target='_blank' rel='noopener noreferrer' href='https://www.drawkit.com/product/notion-style-avatar-creator'>DrawKit</Link> for set of illustrations</p>
        </div>
      </div>
    </footer>
  )
}

function Link ({ children, href, ...rest }: any): ReactElement {
  return (
    <a href={href} rel='noreferrer' className='underline underline-offset-4' {...rest}>
      {children}
    </a>
  )
}
