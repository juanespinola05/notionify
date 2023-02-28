import { ReactElement } from 'react'
import Dropzone from 'react-dropzone'
import { uploadImage } from '../utils/upload'
import { useDetection } from '../hooks/useDetection'

export default function Dropper (): ReactElement {
  const { detection, setDetection } = useDetection()

  function handleDrop (droppedFile: any): void {
    uploadImage(droppedFile[0])
      .then((response) => setDetection(response)).then(() => console.log('-->', detection))
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
    </div>
  )
}
