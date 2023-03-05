import Section from '../layout/Section'

export default function Hero (): React.ReactElement {
  return (
    <Section className='w-full relative grid place-items-center  overflow-hidden'>
      <div className='flex flex-col justify-center items-center gap-6 h-5/6 bg-black rounded-3xl z-10 w-full max-w-screen-xl absolute shadow-sm shadow-gray-700'>
        <img src='src/assets/brand.svg' alt='' className='w-28 absolute top-20' />
        <div className='grid gap-2 text-center'>
          <h1 className='text-4xl font-semibold'>A Notion avatar generator</h1>
          <h2 className='text-gray-400'>Create an avatar from your picture</h2>
        </div>
        <a href='#creator' className='bg-white text-black rounded-lg font-medium py-2.5 px-6 cursor-pointer active:scale-95 border-2'>Get Started</a>
      </div>
      <img src='src/assets/hero_sticker.svg' alt='' className='absolute w-full bottom-0 opacity-20' />
    </Section>
  )
}
