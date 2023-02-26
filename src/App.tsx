import { ReactElement } from 'react'
import SvgCanvas from './components/SvgCanvas'
import { PersonDetails } from './types'
import { mapDetailsToSvg } from './utils/mapDetailsToSvg'

function App (): ReactElement {
  const details: Partial<PersonDetails> = {
    emotion: 'sad',
    cap: 'nocap',
    gender: 'female',
    glasses: 'glasses',
    facialHair: 'beard'
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
