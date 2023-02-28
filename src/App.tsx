import { ReactElement } from 'react'
import Dropper from './components/Dropper'

function App (): ReactElement {
  return (
    <div className='h-screen'>
      <h1>Notion Avatar Generator</h1>
      <Dropper />
    </div>
  )
}

export default App
