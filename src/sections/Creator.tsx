import Section from '../layout/Section'
import Dropper from '../components/Dropper'
import { uploadImage } from '../utils/upload'
import { useDetection } from '../hooks/useDetection'
import { mapDetailsToSvg } from '../utils/svg'
import { useIllustrations } from '../context/illustration'
import Canvas from '../components/Canvas'
import ConfigBar from '../components/ConfigBar'
import { ReactNode } from 'react'
import { useError } from '../context/error'
import { handleError } from '../utils/error'
import Menu from '../components/Menu'

export default function SectionCreator (): React.ReactElement {
  const { detection, setDetection, resetDetection } = useDetection()
  const { illustrationIdList, setIllustrationsIDList } = useIllustrations()
  const { setError } = useError()

  const hasList = illustrationIdList.length > 0

  async function handleDrop (droppedFile: any): Promise<void> {
    try {
      const data = await uploadImage(droppedFile[0])
      setDetection(data.cloudinaryData, data.betaFaceData)

      const svgList = mapDetailsToSvg(detection)
      setIllustrationsIDList(svgList)
    } catch (error) {
      const message = handleError(error)
      setError(message)
      resetDetection()
    }
  }
  return (
    <Section id='creator' className='bg-white bg-creatorBackground bg-cover bg-center w-full grid items-center relative py-2'>
      <div className='flex flex-col items-center gap-4'>
        <Menu />
        <IllustrationWrapper hasList={hasList}>
          {
            hasList
              ? <Canvas />
              : <Dropper handleDrop={handleDrop} />
          }
        </IllustrationWrapper>
        {hasList && <ConfigBar />}
        {/* <DrawerMenu/> */}

        <button
          className='btn btn-active text-white'
          onClick={() => setIllustrationsIDList(mapDetailsToSvg(detection))}
        >
          Regenerar
        </button>
      </div>
    </Section>
  )
}

function IllustrationWrapper (
  { children, hasList }: { children: ReactNode, hasList: boolean }
): React.ReactElement {
  return (
    <div className='relative w-full max-w-xs sm:max-w-md overflow-hidden'>
      {children}

      {
        !hasList && (
          <>
            <div className='bg-white w-20 h-1w-20 absolute top-24 left-0 rounded-full'>
              <img src='src/assets/wrapper_1.svg' alt='' className='opacity-30' />
            </div>
            <div className='bg-white w-12 h-12 absolute top-6 right-6 rounded-full'>
              <img src='src/assets/wrapper_2.svg' alt='' className='opacity-30' />
            </div>
            <div className='bg-white w-16 h-16 absolute top-48 right-0 rounded-full'>
              <img src='src/assets/wrapper_3.svg' alt='' className='opacity-30' />
            </div>
            <div className='w-10 h-10 bg-gray-400 rounded-full absolute top-4 left-10' />
            <div className='w-10 h-10 bg-gray-300 rounded-full absolute top-24 right-2' />
            <div className='w-8 h-8 bg-gray-200 rounded-full absolute top-56 left-10' />
          </>

        )
      }
    </div>
  )
}
