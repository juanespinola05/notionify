import Section from '../layout/Section'
import Dropper from '../components/Dropper'

export default function SectionCreator (): React.ReactElement {
  const handleDrop = async () => await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
  return (
    <Section className='bg-white'>
      <div className='grid pt-32 place-items-center' id='creator'>
        <IllustrationWrapper>
          <Dropper handleDrop={handleDrop} />
        </IllustrationWrapper>
      </div>
    </Section>
  )
}

function IllustrationWrapper ({ children }): React.ReactElement {
  return (
    <div className='relative w-full max-w-md'>
      {children}

      <img src='src/assets/wrapper_1.svg' alt='' className='w-20 h-1w-20 opacity-30 absolute top-24 left-3' />
      <img src='src/assets/wrapper_2.svg' alt='' className='w-12 h-12 opacity-30 absolute top-6 right-16' />
      <img src='src/assets/wrapper_3.svg' alt='' className='w-16 h-16 opacity-30 absolute top-48 right-8' />
      <div className='w-10 h-10 bg-gray-400 rounded-full absolute top-4 left-20' />
      <div className='w-10 h-10 bg-gray-300 rounded-full absolute top-24 right-4' />
      <div className='w-8 h-8 bg-gray-200 rounded-full absolute top-56 left-12' />
    </div>
  )
}
