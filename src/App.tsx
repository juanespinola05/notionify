import { ReactElement } from 'react'
import Section from './layout/Section'
import SectionCreator from './sections/Creator'
import Hero from './sections/Hero'

function App (): ReactElement {
  return (
    <main className='grid gap-4'>
      <Hero />
      <SectionCreator />
      <Section className='w-full bg-gray-200' />
    </main>
  )
}

export default App
