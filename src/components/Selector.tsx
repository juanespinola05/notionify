import useAvatarCanvas from '../hooks/useAvatarCanvas'
import { useIllustrations } from '../context/illustration'
import { svgComponents } from './SVG'

export default function Selector (): React.ReactElement {
  const { setOutfit, outfitId } = useIllustrations()
  const { outfitOptions } = useAvatarCanvas()

  return (
    <section className='rounded-lg overflow-hidden p-2  max-w-xs sm:max-w-lg'>
      <div className='rounded-box bg-white border-2 border-black overflow-x-scroll scroll-smooth'>
        <ul tabIndex={0} className='p-2 shadow overflow-x-scroll flex w-max'>
          {
          outfitOptions.map((option) => {
            const Element = svgComponents[option]
            return (
              <li key={option} onClick={() => setOutfit(option)} className={`overflow-hidden h-20 w-20 ${option === outfitId ? 'bg-gray-400 rounded-md' : ''}`}>
                <Element />
              </li>
            )
          })
        }
        </ul>
      </div>

    </section>
  )
}
