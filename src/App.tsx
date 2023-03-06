import { ReactElement } from 'react'
import ErrorAlert from './components/ErrorAlert'
import SectionCreator from './sections/Creator'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import { IS_FEATURE_COUNTDOWN } from './constants/environment'
import Countdown from './sections/Countdown'
import Informative from './sections/Informative'

function App (): ReactElement {
  if (IS_FEATURE_COUNTDOWN) return <Countdown />

  return (
    <>
      <ErrorAlert />
      <main className='grid'>
        <Hero />
        <SectionCreator />
        <Informative />
        <Footer />
      </main>
    </>
  )
}

export default App
