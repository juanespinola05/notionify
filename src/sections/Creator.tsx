import Section from '../layout/Section'
import Dropper from '../components/Dropper'
import { uploadImage } from '../utils/upload'
import { useDetection } from '../hooks/useDetection'
import { mapDetailsToSvg } from '../utils/svg'
import { useIllustrations } from '../context/illustration'
import Canvas from '../components/Canvas'
import Selector from '../components/Selector'
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
        {
          hasList
            ? <><Menu /><Canvas /><Selector /></>
            : <Dropper handleDrop={handleDrop} />
          }
      </div>
    </Section>
  )
}
