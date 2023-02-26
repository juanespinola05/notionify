import { ReactElement } from 'react'
import Dropzone from 'react-dropzone'
import { uploadImage } from '../utils/upload'

export default function Dropper (): ReactElement {
  function handleDrop (droppedFile: any): void {
    uploadImage(droppedFile[0]).then((res) => {
      console.log('Dropper:', res)
    }).catch(err => console.log(err))
  }

  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      )}
    </Dropzone>
  )
}
