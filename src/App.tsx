import { ReactElement } from 'react'
import ErrorAlert from './components/ErrorAlert'
import Section from './layout/Section'
import SectionCreator from './sections/Creator'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import { ENVIRONMENT } from './constants/environment'
import Countdown from './sections/Countdown'

function App (): ReactElement {
  if (ENVIRONMENT.FEATURE_COUNTDOWN) return <Countdown />

  return (
    <>
      <ErrorAlert />
      <main className='grid gap-4'>
        <Hero />
        <SectionCreator />
        <Section className='w-full bg-gray-200' />
        <Footer />
      </main>
    </>
  )
}

export default App
