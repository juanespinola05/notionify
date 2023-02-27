import { ReactElement } from 'react'
import SvgCanvas from './components/SvgCanvas'
import { PersonDetails } from './types'
import { mapDetailsToSvg } from './utils/mapDetailsToSvg'

function App (): ReactElement {
  const details: PersonDetails = {
    emotion: 'anger',
    gender: 'female',
    glasses: 'no_glasses',
    facial_hair: 'none',
    head: 'female_large'
  }

  const svgToRender = mapDetailsToSvg(details)

  return (
    <div>
      <h1>Notion Avatar Generator</h1>
      <SvgCanvas svgList={svgToRender} />
    </div>
  )
}

export default App
