import Section from '../layout/Section'
import Counter from '../components/Counter'

export default function Countdown (): React.ReactElement {
  return (
    <Section className='w-full relative grid place-items-center  overflow-hidden'>
      <div className='flex flex-col justify-center items-center gap-6 h-5/6 bg-black rounded-3xl z-10 w-full max-w-screen-xl absolute shadow-sm shadow-gray-700'>
        <img src='/creator/brand.svg' alt='' className='w-28 absolute top-20' />
        <div className='grid gap-2 text-center'>
          <h1 className='text-4xl font-semibold'>A Notion avatar generator</h1>
        </div>
        <Counter />
        <h2 className='text-gray-400'>(is going to be enabled for the Hackathon vote)</h2>
        <button disabled className='btn disabled:opacity-50 disabled:bg-white disabled:text-black disabled:rounded-lg disabled:font-medium py-2.5 px-6 border-2'>Get Started</button>
      </div>
    </Section>
  )
}
