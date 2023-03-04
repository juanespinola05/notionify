import { ReactElement, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

interface DropperProps {
  handleDrop: () => Promise<void>
  isLoading?: boolean
}

const DROPPER_LOADING_TEXT_LIST = ['Extrayendo archivo...', 'Leyendo documentos...', 'Generando analisis...', 'Banca un toque...']

export default function Dropper ({ handleDrop }: DropperProps): ReactElement {
  const [isLoading, setIsLoading] = useState(false)

  const onDrop = useCallback(acceptedFiles => {
    setIsLoading(true)
    handleDrop().finally(() => setIsLoading(false))
  }, [])
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop })

  const Loader = () => {
    const images = [1, 2, 3, 4]

    return (
      <div className='relative w-64 h-6w-64'>
        {images.map((image) => {
          return <img key={image} className='w-full h-full animated absolute' src={`src/assets/${image}.svg`} alt='' />
        })}
        {/* <img className='w-full h-full absolute animated' src='src/assets/2.svg' alt='' />
        <img className='w-full h-full absolute animated' src='src/assets/3.svg' alt='' />
        <img className='w-full h-full absolute animated' src='src/assets/4.svg' alt='' /> */}
      </div>
    )
  }

  const TextLoader = () => {
    return (
      <div className='w-full h-8 relative bg-blue-00 overflow-hidden'>
        {
          DROPPER_LOADING_TEXT_LIST.map((text) => (
            <p className='text-red-700 text-center line-up absolute' key={text}>{text}</p>
          ))

        }
      </div>
    )
  }

  return (
    <div className='grid gap-4 place-items-center'>
      <div {...getRootProps()} className='transition-all w-64 h-64 rounded-full grid place-items-center'>
        <input {...getInputProps()} />

        {
          isLoading
            ? <Loader />
            : <img src='src/assets/1.svg' alt='' className={`w-full h-full opacity-30  ${isDragActive ? 'opacity-80' : ''}`} />
        }
      </div>

      {
            isLoading
              ? <TextLoader />
              : (
                <div className={`grid gap-3 place-items-center text-gray-400  transition-all ${isDragActive ? 'text-gray-800' : ''}`}>
                  <p className='flex flex-col items-center'>
                    {isDragActive ? 'Drop' : 'Drag'} your image here to start
                    <span className='text-sm font-medium'>(must be a single person)</span>
                  </p>

                  <div className='w-full justify-center flex gap-4 text-current items-center max-w-xs'>
                    <div className='border-t-2 w-16 border-current' />
                    or
                    <div className='border-t-2 w-16 border-current' />
                  </div>

                  <button onClick={() => open()} className='w-28 bg-gray-800 py-1.5 px-4 text-white rounded-lg hover:outline-2 hover:outline-double hover:outline-slate-600'>Browse file</button>
                </div>
                )
          }
      <TextLoader />
    </div>
  )
}
