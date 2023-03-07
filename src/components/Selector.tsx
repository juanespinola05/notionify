import useAvatarCanvas from '../hooks/useAvatarCanvas'
import { useIllustrations, useIllustrationConfig } from '../context/illustration'
import { svgComponents } from './SVG'
import { CONFIG_OUTFIT_ID } from '../constants'
import { ReactElement } from 'react'

export default function Selector (): React.ReactElement {
  const { setOutfit, outfitId, setAccessory, accessoryId } = useIllustrations()
  const { outfitOptions, accessoryOptions } = useAvatarCanvas()
  const { configId } = useIllustrationConfig()

  const isOutfitSelected = configId === CONFIG_OUTFIT_ID
  const options = isOutfitSelected ? outfitOptions : accessoryOptions

  function handleSelect (option: string): void {
    isOutfitSelected ? setOutfit(option) : setAccessory(option)
  }

  const BlockedButton = (): ReactElement => {
    return (
      <button onClick={() => setAccessory('')} className='bg-gray-900 h-16 w-16 rounded-xl grid place-items-center'>
        <svg width='43' height='43' viewBox='0 0 43 43' className='w-8 h-8 text-gray-100 ' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M21.2431 42.55C18.3052 42.55 15.5468 41.9917 12.9681 40.875C10.3894 39.7583 8.13333 38.2333 6.2 36.3C4.26667 34.3667 2.75 32.1083 1.65 29.525C0.55 26.9417 0 24.1667 0 21.2C0 18.3 0.555067 15.5609 1.6652 12.9826C2.77537 10.4043 4.2939 8.15435 6.2208 6.23275C8.14773 4.31112 10.401 2.79192 12.9806 1.67515C15.5602 0.558384 18.3171 0 21.2512 0C24.1853 0 26.9401 0.55745 29.5155 1.67235C32.0909 2.78728 34.3405 4.30395 36.2643 6.22235C38.1881 8.14078 39.7167 10.3917 40.85 12.975C41.9833 15.5583 42.55 18.3 42.55 21.2C42.55 24.1667 41.9933 26.9443 40.8798 29.5329C39.7663 32.1215 38.2433 34.3764 36.3107 36.2977C34.3781 38.2189 32.1182 39.7412 29.5309 40.8647C26.9436 41.9882 24.181 42.55 21.2431 42.55ZM21.25 37.85C25.8625 37.85 29.774 36.2365 32.9844 33.0094C36.1948 29.7823 37.8 25.8458 37.8 21.2C37.8 19.4078 37.5167 17.6598 36.95 15.9559C36.3833 14.252 35.55 12.7 34.45 11.3L11.3 34.4C12.6429 35.598 14.1814 36.4726 15.9155 37.0236C17.6496 37.5745 19.4278 37.85 21.25 37.85ZM8.1 31.15L31.15 8.05C29.7106 6.9358 28.1562 6.10725 26.487 5.56435C24.8177 5.02145 23.0721 4.75 21.25 4.75C16.6375 4.75 12.726 6.34473 9.5156 9.5342C6.3052 12.7237 4.7 16.6123 4.7 21.2C4.7 23.0338 5.00478 24.799 5.61435 26.4957C6.22392 28.1925 7.05247 29.7439 8.1 31.15Z' fill='currentColor' />
        </svg>
      </button>
    )
  }

  return (
    <section className='rounded-lg overflow-hidden p-2 absolute bottom-7 max-w-xs sm:max-w-lg'>
      <div className='rounded-box bg-white border-2 border-black overflow-x-scroll scroll-smooth'>
        <ul tabIndex={0} className='p-2 shadow overflow-x-scroll flex items-center gap-2 w-max'>
          {!isOutfitSelected && <BlockedButton />}
          {
      options.map((option) => {
        const Element = svgComponents[option]
        return (
          <li key={option}>
            <button onClick={() => handleSelect(option)} className={`overflow-hidden rounded-xl hover:bg-gray-100 cursor-pointer h-20 w-20 ${option === outfitId || option === accessoryId ? 'bg-gray-200 hover:bg-gray-200 rounded-md' : ''}`}>
              <Element />
            </button>
          </li>
        )
      })
    }
        </ul>
      </div>

    </section>
  )
}
