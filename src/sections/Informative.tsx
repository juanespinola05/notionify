import { ReactElement, ReactNode } from 'react'
import Section from '../layout/Section'
import InformativeImage from '../assets/informative.png'
import ArrowGif from '../assets/arrow.gif'

export default function Informative (): ReactElement {
  return (
    <Section className='bg-white border-t-4 border-black pt-16 pb-10 md:pb-0 min-h-min md:min-h-[800px]'>
      <div className='md:grid h-full md:items-end justify-items-center'>
        <h2 className='text-black text-center text-3xl font-bold self-start'>What can Notionify do for me?</h2>
        <div className='relative mt-12 px-10 sm:px-16 md:p-0 grid md:block grid-cols-1 gap-4 sm:grid-cols-3 place-items-stretch'>
          <InfoCard className='-left-10'>
            <h5 className='font-bold'>Happy or sad? maybe nervous? or angry?</h5>
            <p>Give your avatar your same expression</p>
            <InfoArrow className='rotate-[160deg] -bottom-24 left-16' />
          </InfoCard>
          <InfoCard className='-right-16'>
            <h5 className='font-bold'>Long or short hair? Wavy or straight?</h5>
            <p>Automatically selects a hair to fit your hair length and style!</p>
            <div className='vertical-rotate'>
              <InfoArrow className='rotate-[150deg] -bottom-22 left-24' />
            </div>
          </InfoCard>
          <InfoCard className='bottom-36 -left-28'>
            <h5 className='font-bold'>What suits you better?</h5>
            <p>Personalize your outfit and show your fashionable side</p>
            <InfoArrow className='rotate-[160deg] -bottom-24 left-16' />
          </InfoCard>
          <InfoCard className='bottom-48 -right-28 '>
            <h5 className='font-bold'>What about accesories?</h5>
            <p>Put on your glasses or select your fav accesory</p>
            <div className='vertical-rotate'>
              <InfoArrow className='rotate-[150deg] -bottom-22 left-24' />
            </div>
          </InfoCard>
          <InfoCard className='-top-16 left-48 '>
            <h5 className='font-bold'>The facial hair too? 😳</h5>
            <p>Yes, girl</p>
            <InfoArrow className='rotate-[190deg] rotate -bottom-16 -left-10' />
          </InfoCard>
          <InfoCard className='hidden sm:block md:hidden'>
            <img
              className='h-32 object-cover m-auto'
              src={InformativeImage}
            />
          </InfoCard>
          <img
            className='w-full max-w-lg hidden md:block'
            src={InformativeImage}
          />
        </div>
      </div>
    </Section>
  )
}

interface IProps {
  className?: string
  children: ReactNode
}

function InfoCard ({ children, className = '' }: IProps): ReactElement {
  return (
    <div className={`md:absolute w-full text-black md:w-40 border-2 border-black p-2 rounded-md shadow-lg ${className}`}>
      {children}
    </div>
  )
}

function InfoArrow ({ className = '' }: Pick<IProps, 'className'>): ReactElement {
  return (
    <div className={`hidden md:block absolute w-16 ${className}`}>
      <img src={ArrowGif} alt='' />
    </div>
  )
}
