import Download from '../assets/icons/Download'
import Stars from '../assets/icons/Stars'
import Hanger from '../assets/icons/Hanger'
import useAvatarCanvas from '../hooks/useAvatarCanvas'
import { useIllustrations } from '../context/illustration'
import { svgComponents } from './SVG'
import ExportModal from './ExportModal'

export default function ConfigBar (): React.ReactElement {
  return (
    <nav className=' rounded-lg w-full max-w-xl absolute top-6 flex items-center p-2 justify-between'>
      <div className='flex gap-2 items-center'>
        <OutfitDropdown />
        <AccessoriesDropdown />

      </div>
      <ExportModal label={<Download className='w-6 h-6' />}>
        <div>
          holiiii
        </div>
      </ExportModal>
    </nav>
  )
}

function OutfitDropdown () {
  const { list } = useIllustrations()
  const { outfitOptions, outfitSelection, changeSelection } = useAvatarCanvas(list)

  const OutfitsList = () => {
    return (
      <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-screen max-w-xl flex-row gap-4'>
        {
                  outfitOptions.map((option) => {
                    const Element = svgComponents[option]
                    return (
                      <li key={option} onClick={() => changeSelection(option)} className={`overflow-hidden h-20 w-20 ${option === outfitSelection ? 'bg-gray-400 rounded-md' : ''}`}>
                        <Element />
                      </li>
                    )
                  })
              }
      </ul>
    )
  }

  return (
    <div className='dropdown dropdown-hover'>
      <label tabIndex={0} className='btn'>
        <Hanger className='w-6 h-6' />
      </label>
      <OutfitsList />
    </div>
  )
}

/*
          outfitOptions.map(option => {
            const Element = svgComponents[option]
            return (
              <div key={option} className={`overflow-hidden h-40 w-40 ${option === outfitSelection ? 'border-green-500 border-2' : ''}`}>
                <button onClick={() => changeSelection(option)}>Elegir</button>
                <Element />
              </div>
            )
          })

 */

function AccessoriesDropdown () {
  return (
    <div className='dropdown dropdown-hover'>
      <label tabIndex={0} className='btn'>
        <Stars className='w-6 h-6' />
      </label>
      <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  )
}
