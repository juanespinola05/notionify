import { FC, ReactElement, ReactNode, SVGProps } from 'react'
import { ReactComponent as Github } from '../assets/github.svg'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'
import { ReactComponent as Web } from '../assets/web.svg'
import { ReactComponent as RodrigoAvatar } from '../assets/rodrigo.svg'
import { ReactComponent as JuanseAvatar } from '../assets/juanse.svg'
import Section from '../layout/Section'

const JUANSE: DevData = {
  website: 'https://juanse.dev',
  github: 'juanespinola05',
  linkedin: 'juanse05',
  name: 'Juan Espínola',
  description: 'Desarrollador Java',
  Icon: JuanseAvatar
}

const RODRIGO: DevData = {
  website: 'https://rodrigo.deno.dev/',
  github: 'rodri-alfonso',
  linkedin: 'rodrigo-alfonso-',
  name: 'Rodrigo Alfonso',
  description: 'Desarrollador Java',
  Icon: RodrigoAvatar
}

export default function About (): ReactElement {
  return (
    <Section className='grid md:grid-cols-2 h-96 border-t-2 border-black'>
      <Info className='text-white' data={RODRIGO} />
      <Info className='bg-white text-black' data={JUANSE} reverse />
    </Section>
  )
}

interface DevData {
  name: string
  github: string
  linkedin: string
  website: string
  description: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

interface IProps {
  className?: string
  reverse?: boolean
  data: DevData
}

function Info ({
  className = '',
  reverse = false,
  data: { github, linkedin, name, website, description, Icon }
}: IProps): ReactElement {
  return (
    <article className={`grid place-content-center ${className}`}>
      <div className={`flex md:flex-col items-center gap-6 ${reverse ? 'max-md:flex-row-reverse' : ''}`}>
        <div>
          <Icon width={200} height={200} />
        </div>
        <div className='flex flex-col gap-4 justify-between'>
          <div>
            <h3 className='font-bold text-xl'>{name}</h3>
            <p>{description}</p>
          </div>
          <ul className='flex gap-2'>
            <li>
              <Link href={`https://github.com/${github}`}>
                <Github width={30} height={30} fill={reverse ? 'black' : 'white'} />
              </Link>
            </li>
            <li>
              <Link href={`https://linkedin.com/in/${linkedin}`}>
                <Linkedin width={30} height={30} fill={reverse ? 'black' : 'white'} />
              </Link>
            </li>
            <li>
              <Link href={website}>
                <Web width={30} height={30} fill={reverse ? 'black' : 'white'} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

function Link ({ href, children }: { href: string, children: ReactNode }): ReactElement {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className='block rounded-full w-8 h-8s'
    >
      {children}
    </a>
  )
}
