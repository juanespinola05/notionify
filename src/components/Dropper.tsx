import { ReactElement, useState } from 'react'
import Dropzone from 'react-dropzone'
import { uploadImage } from '../utils/upload'
import { useDetection } from '../hooks/useDetection'
import SvgCanvas from './SvgCanvas'
import { mapDetailsToSvg } from '../utils/mapDetailsToSvg'

export default function Dropper (): ReactElement {
  const { detection, setDetection } = useDetection()
  const [svgList, setSvgList] = useState<string[]>([])

  function handleDrop (droppedFile: any): void {
    uploadImage(droppedFile[0])
      .then((response) => setDetection(response))
      .then(() => {
        console.log('🚀 ~ file: Dropper.tsx:16 ~ .then ~ response:', detection)
        const foo = mapDetailsToSvg(detection)
        setSvgList(foo)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='bg-slate-300 border-sky-100 border-solid grid gap-10'>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <SvgCanvas svgList={svgList} />
      <button onClick={() => setSvgList(mapDetailsToSvg(detection))}>
        Regenerar
      </button>
    </div>
  )
}
