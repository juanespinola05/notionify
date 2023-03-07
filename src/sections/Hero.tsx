import Section from '../layout/Section'

export default function Hero (): React.ReactElement {
  return (
    <Section className='w-full bg-heroBackground bg-no-repeat bg-cover grid place-items-center overflow-hidden'>
      <div className='flex flex-col justify-center items-center gap-6 h-full bg-black rounded-3xl z-10 w-full  shadow-sm shadow-gray-700 bg-opacity-80'>
        <img src='src/assets/brand.svg' alt='' className='w-32 absolute top-16' />
        <div className='grid gap-2 text-center place-items-center'>
          <h1 className='text-4xl text-white font-semibold'>Create your unique Notion avatar style</h1>
          <h2 className='text-gray-400 text-2xl font-medium'>From any picture, from any feeling.</h2>
        </div>
        <a
          href='#creator'
          className='bg-white text-black rounded-lg font-semibold mt-4 py-2 px-6 cursor-pointer bg-opacity-90 active:scale-95 border-2'
        >
          Get Started
        </a>
      </div>
    </Section>
  )
}
