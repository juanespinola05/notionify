import { ReactElement } from 'react'
import { useIllustrationConfig, useIllustrations } from '../context/illustration'
import ExportModal from './ExportModal'
import { mapDetailsToSvg } from '../utils/svg'
import { useDetection } from '../hooks/useDetection'

const OUTFIT_ICON_ID = 'outfit'
const ACCESORY_ICON_ID = 'accessory'

export default function Menu (): ReactElement {
  const { detection } = useDetection()
  const { setIllustrationsIDList, resetIllustrations } = useIllustrations()
  const { setConfigId, configId } = useIllustrationConfig()

  return (
    <ul className='menu menu-horizontal justify-center bg-gray-900 rounded-box absolute top-16'>
      <li>
        <button data-tip='Outfits' className={`tooltip active:bg-black ${OUTFIT_ICON_ID === configId ? 'w-full h-full bg-gray-700 active:text-white text-gray-100' : 'text-gray-400'}`} onClick={() => setConfigId(OUTFIT_ICON_ID)}>
          <svg width='43' height='36' viewBox='0 0 43 36' className='w-5 h-5 ' xmlns='http://www.w3.org/2000/svg'>
            <path d='M2.40921 35.2C1.27588 35.2 0.525877 34.6583 0.159211 33.575C-0.207456 32.4917 0.0592105 31.6 0.959211 30.9L19.1092 16.95V14.55C19.1092 13.8833 19.3425 13.3167 19.8092 12.85C20.2759 12.3833 20.8259 12.15 21.4592 12.15C22.4925 12.1833 23.3675 11.8417 24.0842 11.125C24.8009 10.4083 25.1592 9.51667 25.1592 8.45C25.1592 7.45 24.8009 6.58333 24.0842 5.85C23.3675 5.11667 22.5092 4.75 21.5092 4.75C20.8425 4.75 20.2342 4.925 19.6842 5.275C19.1342 5.625 18.7425 6.1 18.5092 6.7C18.2759 7.13333 17.9759 7.46667 17.6092 7.7C17.2425 7.93333 16.8259 8.05 16.3592 8.05C15.4925 8.05 14.8175 7.69167 14.3342 6.975C13.8509 6.25833 13.7925 5.5 14.1592 4.7C14.7925 3.26667 15.7759 2.125 17.1092 1.275C18.4425 0.425 19.8925 0 21.4592 0C23.7925 0 25.7842 0.816667 27.4342 2.45C29.0842 4.08333 29.9092 6.05 29.9092 8.35C29.9092 10.15 29.3259 11.7417 28.1592 13.125C26.9925 14.5083 25.5425 15.5333 23.8092 16.2V16.95L41.9592 30.9C42.8592 31.6 43.1259 32.4917 42.7592 33.575C42.3925 34.6583 41.6425 35.2 40.5092 35.2H2.40921ZM9.40921 30.45H33.5092L21.4592 20.95L9.40921 30.45Z' fill='currentColor' />
          </svg>
        </button>
      </li>
      <li>
        <button data-tip='Accessories' className={`tooltip  active:bg-black ${ACCESORY_ICON_ID === configId ? 'bg-gray-700 active:text-white text-gray-100' : 'text-gray-400'}`} onClick={() => setConfigId(ACCESORY_ICON_ID)}>
          <svg width='45' height='41' viewBox='0 0 45 41' fill='none' className='w-5 h-5  ' xmlns='http://www.w3.org/2000/svg'>
            <path d='M17.05 34.05L11.7 22.35L0 17L11.6875 11.7031L17.05 0L22.3625 11.7031L34.1 17L22.35 22.35L17.05 34.05ZM36.1 40.1L33.4438 34.2063L27.55 31.6L33.4438 28.8938L36.1 23.05L38.7563 28.8938L44.6 31.6L38.7563 34.2063L36.1 40.1Z' fill='currentColor' />
          </svg>
        </button>
      </li>

      <li>
        <button data-tip='Regenerate' className='tooltip active:bg-black' onClick={() => setIllustrationsIDList(mapDetailsToSvg(detection))}>
          <svg width='35' height='41' viewBox='0 0 35 41' className='w-5 h-5 text-gray-400' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M15.8 40.65C11.3667 40.2833 7.625 38.4667 4.575 35.2C1.525 31.9333 0 28.05 0 23.55C0 20.9167 0.591667 18.425 1.775 16.075C2.95833 13.725 4.61667 11.7667 6.75 10.2L10.1 13.55C8.43333 14.6167 7.11667 16.05 6.15 17.85C5.18333 19.65 4.7 21.55 4.7 23.55C4.7 26.7833 5.75833 29.5667 7.875 31.9C9.99167 34.2333 12.6333 35.5667 15.8 35.9V40.65ZM18.8 40.65V35.9C22.0333 35.5333 24.6833 34.1917 26.75 31.875C28.8167 29.5583 29.85 26.7833 29.85 23.55C29.85 20.2167 28.725 17.35 26.475 14.95C24.225 12.55 21.4333 11.25 18.1 11.05H16.95L20.15 14.3L17.6 16.85L9.2 8.45L17.6 0L20.15 2.55L16.4 6.3H17.6C22.3333 6.3 26.35 7.99167 29.65 11.375C32.95 14.7583 34.6 18.8167 34.6 23.55C34.6 28.05 33.075 31.9333 30.025 35.2C26.975 38.4667 23.2333 40.2833 18.8 40.65Z' fill='currentColor' />
          </svg>
        </button>
      </li>

      <ExportModal label={
        <svg width='37' height='38' viewBox='0 0 37 38' fill='none' className='w-5 h-5 text-gray-400' xmlns='http://www.w3.org/2000/svg'>
          <path d='M18.4378 25.9C18.1459 25.9 17.8592 25.8409 17.5775 25.7228C17.2958 25.6046 17.0367 25.4303 16.8 25.2L8.7 17.1C8.23333 16.6333 8.00833 16.075 8.025 15.425C8.04167 14.775 8.28333 14.2167 8.75 13.75C9.21667 13.2833 9.76667 13.05 10.4 13.05C11.0333 13.05 11.5833 13.2833 12.05 13.75L16.1 17.85V2.4C16.1 1.74583 16.3279 1.1823 16.7838 0.7094C17.2396 0.236467 17.798 0 18.4588 0C19.1196 0 19.675 0.236467 20.125 0.7094C20.575 1.1823 20.8 1.74583 20.8 2.4V17.85L24.9 13.75C25.3667 13.2833 25.9167 13.05 26.55 13.05C27.1833 13.05 27.7333 13.2833 28.2 13.75C28.6667 14.2167 28.9 14.775 28.9 15.425C28.9 16.075 28.6667 16.6333 28.2 17.1L20.1 25.2C19.8611 25.4303 19.5973 25.6046 19.3086 25.7228C19.0199 25.8409 18.7296 25.9 18.4378 25.9ZM4.7 37.95C3.39833 37.95 2.28958 37.4847 1.37375 36.5542C0.457917 35.6237 0 34.4973 0 33.175V26.15C0 25.4917 0.227917 24.9354 0.68375 24.4813C1.13962 24.0271 1.69795 23.8 2.35875 23.8C3.01958 23.8 3.575 24.0271 4.025 24.4813C4.475 24.9354 4.7 25.4899 4.7 26.1448V33.2H32.15V26.1448C32.15 25.4899 32.3779 24.9354 32.8338 24.4813C33.2896 24.0271 33.848 23.8 34.5088 23.8C35.1696 23.8 35.725 24.0271 36.175 24.4813C36.625 24.9354 36.85 25.4899 36.85 26.1448V33.2C36.85 34.5154 36.3833 35.636 35.45 36.5616C34.5167 37.4872 33.4167 37.95 32.15 37.95H4.7Z' fill='currentColor' />
        </svg>
}
      />
      <li>
        <button data-tip='Borrar' className='tooltip active:bg-black' onClick={() => resetIllustrations()}>
          <svg width='38' height='40' viewBox='0 0 38 40' fill='none' className='w-5 h-5 text-gray-400' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7.65 39.45C6.3346 39.45 5.21408 38.9921 4.28845 38.0763C3.36282 37.1604 2.9 36.0517 2.9 34.75V7.1H0V2.4H11.55V0H26.4V2.4H38V7.1H35.1V34.75C35.1 36.0517 34.6372 37.1604 33.7116 38.0763C32.786 38.9921 31.6654 39.45 30.35 39.45H7.65ZM12.7 30.85H16.55V10.9H12.7V30.85ZM21.45 30.85H25.35V10.9H21.45V30.85Z' fill='currentColor' />
          </svg>

        </button>
      </li>
    </ul>
  )
}
