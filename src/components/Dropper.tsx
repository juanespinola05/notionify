import { ReactElement, useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { uploadImage, fetchBetaFace } from '../utils/upload'
import { useDetection } from '../hooks/useDetection'
import SvgCanvas from './SvgCanvas'
import { mapDetailsToSvg } from '../utils/svg'
import { CloudinaryDetectionResponse } from '../types'

export default function Dropper (): ReactElement {
  const { detection, setDetection } = useDetection()
  console.log('🚀 detection:', detection)
  const [svgList, setSvgList] = useState<string[]>([])

  let clodinaryResponse: CloudinaryDetectionResponse

  function handleDrop (droppedFile: any): void {
    uploadImage(droppedFile[0])
      .then(async (response) => { clodinaryResponse = response; return await fetchBetaFace(response.url) })
      .then((data) => {
        console.log('🚀 BetaFace API:', data)
        setDetection(clodinaryResponse, data.media.faces.at(0))
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
