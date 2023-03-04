import Section from '../layout/Section'

export default function Hero (): React.ReactElement {
  return (
    <Section className='w-full'>
      <div className='flex flex-col justify-center items-center gap-6 h-full'>

        <h1 className='text-4xl font-semibold'>notion avatar generator</h1>
        <a href='#creator' className='bg-white text-black rounded-full py-3 px-6 cursor-pointer'>Try out</a>
      </div>
    </Section>
  )
}
