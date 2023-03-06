import { ReactElement, useCallback, useEffect, useState } from 'react'
import { useDropzone, DropzoneOptions } from 'react-dropzone'
import { DROPPER_LOADING_TEXT_LIST } from '../config'
import { useError } from '../context/error'

interface DropperProps {
  handleDrop: (dropper: any) => Promise<void>
  isLoading?: boolean
}

const ALLOWED_MIME = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/webp': ['.webp']
}

const ALLOWED_FORMATS = 'Only PNG, JPEG, JPG and WEBP are allowed'

type OnDropCallback = NonNullable<DropzoneOptions['onDrop']>
type OnDropRejectedCallback = NonNullable<DropzoneOptions['onDropRejected']>

export default function Dropper ({ handleDrop }: DropperProps): ReactElement {
  const [isLoading, setIsLoading] = useState(false)
  const { setError } = useError()

  const onDropRejected = useCallback<OnDropRejectedCallback>(() => {
    setError(ALLOWED_FORMATS)
  }, [])

  const onDrop = useCallback<OnDropCallback>((acceptedFiles, fileRejection) => {
    if (fileRejection.length > 0) return

    setIsLoading(true)
    handleDrop(acceptedFiles).finally(() => setIsLoading(false))
  }, [])

  const { getRootProps, getInputProps, isDragActive, open, isDragReject } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    accept: ALLOWED_MIME
  })

  return (
    <div className='grid gap-4 place-items-center'>
      <div {...getRootProps()} className='transition-all w-64 h-64 rounded-full grid place-items-center'>
        <input {...getInputProps()} />

        {
          isLoading
            ? <Loader />
            : (
              <img
                src={`src/assets/${isDragReject ? 'angry' : (isDragActive ? '5' : '1')}.svg`}
                alt=''
                className={`w-full h-full opacity-30  ${isDragActive ? 'opacity-80' : ''}`}
              />
              )
        }
      </div>

      {
            isLoading
              ? <TextLoader />
              : (
                <div className={`grid gap-3 place-items-center text-gray-400  transition-all ${isDragActive ? 'text-gray-800' : ''}`}>
                  <p className='flex flex-col items-center'>
                    {
                      isDragReject
                        ? <span className='text-red-600'>{ALLOWED_FORMATS}</span>
                        : <span>{isDragActive ? 'Drop' : 'Drag'} your image here to start</span>
                    }
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
    </div>
  )
}

const Loader = (): JSX.Element => {
  return (
    <div className='relative w-64 h-64 rounded-full loader-3d'>
      <img className='w-full h-full' src='src/assets/3.svg' alt='' />
      <img className='w-full h-full' src='src/assets/4.svg' alt='' />
    </div>
  )
}

const TextLoader = (): JSX.Element => {
  const [textIndex, setTextIndex] = useState(0)

  const next = (index: number): number => index === DROPPER_LOADING_TEXT_LIST.length ? 0 : ++index

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prev => next(prev))
    }, 5000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className='w-full h-8 relative bg-blue-00 overflow-hidden'>
      <p className='text-red-700 text-center line-up'>{DROPPER_LOADING_TEXT_LIST[textIndex]}</p>
    </div>
  )
}
