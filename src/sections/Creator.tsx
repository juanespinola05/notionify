import Section from '../layout/Section'
import Dropper from '../components/Dropper'
import { uploadImage, fetchBetaFace } from '../utils/upload'
import { useDetection } from '../hooks/useDetection'
import { mapDetailsToSvg } from '../utils/svg'
import { CloudinaryDetectionResponse } from '../types'
import { useIllustrations } from '../context/illustration'
import Canvas from '../components/Canvas'
import ConfigBar from '../components/ConfigBar'
import { ReactNode } from 'react'

export default function SectionCreator (): React.ReactElement {
  const { detection, setDetection } = useDetection()
  const { illustrationIdList, setIllustrationsIDList } = useIllustrations()

  const hasList = illustrationIdList.length > 0

  let clodinaryResponse: CloudinaryDetectionResponse

  async function handleDrop (droppedFile: any): Promise<void> {
    uploadImage(droppedFile[0])
      .then(async (response) => { clodinaryResponse = response; return await fetchBetaFace(response.url) })
      .then((data) => {
        setDetection(clodinaryResponse, data.media.faces.at(0))
        const svgList = mapDetailsToSvg(detection)
        setIllustrationsIDList(svgList)
      })
      .catch(err => console.log(err))
  }
  return (
    <Section className='bg-white w-full grid place-items-center gap-48 relative'>
      {hasList && <ConfigBar />}
      {/* <ConfigBar /> */}
      <div className='grid pt-36 w-full place-items-center' id='creator'>

        <IllustrationWrapper hasList={hasList}>
          {
            hasList
              ? <Canvas />
              : <Dropper handleDrop={handleDrop} />
          }
        </IllustrationWrapper>
      </div>

      <button onClick={() => setIllustrationsIDList(mapDetailsToSvg(detection))}>
        Regenerar
      </button>
    </Section>
  )
}

function IllustrationWrapper (
  { children, hasList }: { children: ReactNode, hasList: boolean }
): React.ReactElement {
  return (
    <div className='relative w-full max-w-md'>
      {children}

      {
        !hasList && (
          <>
            <img src='src/assets/wrapper_1.svg' alt='' className='w-20 h-1w-20 opacity-30 absolute top-24 left-3' />
            <img src='src/assets/wrapper_2.svg' alt='' className='w-12 h-12 opacity-30 absolute top-6 right-16' />
            <img src='src/assets/wrapper_3.svg' alt='' className='w-16 h-16 opacity-30 absolute top-48 right-8' />
            <div className='w-10 h-10 bg-gray-400 rounded-full absolute top-4 left-20' />
            <div className='w-10 h-10 bg-gray-300 rounded-full absolute top-24 right-4' />
            <div className='w-8 h-8 bg-gray-200 rounded-full absolute top-56 left-12' />
          </>

        )
      }
    </div>
  )
}
