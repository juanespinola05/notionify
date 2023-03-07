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

  const onDropRejected = useCallback<OnDropRejectedCallback>(() => setError(ALLOWED_FORMATS), [])

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

  const SupportContent = (): ReactElement => {
    return (
      <>
        <span className='font-bold'>{isDragActive ? 'Drop' : 'Drag'} your image here to start</span>
        <span className='text-sm font-semibold'>(there must be only one person)</span>
      </>
    )
  }

  const Rules = (): ReactElement => {
    return (
      <p className='flex flex-col items-center '>
        {
        isDragReject
          ? (
            <div className='alert shadow-lg px-3 py-2'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='stroke-info flex-shrink-0 w-6 h-6'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>
              <span className='text-gray-200 text-sm font-medium transition-all'>{ALLOWED_FORMATS}</span>
            </div>
            )
          : <SupportContent />
      }
      </p>
    )
  }

  return (
    <div className='grid gap-4 place-items-center'>
      <div {...getRootProps()} className='transition-all w-80 h-80 bg-white rounded-full grid place-items-center'>
        <input {...getInputProps()} />

        {
          isLoading
            ? <Loader />
            : (
              <img
                src={`/creator/${isDragReject ? 'angry' : (isDragActive ? '5' : '1')}.svg`}
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
                  <Rules />

                  <div className='w-full justify-center flex gap-4 text-current items-center max-w-xs'>
                    <div className='border-t-2 w-16 border-current' />
                    or
                    <div className='border-t-2 w-16 border-current' />
                  </div>

                  <button onClick={() => open()} className='w-32 border-2 border-black py-1.5 px-4 text-black  rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all'>Browse file</button>
                </div>
                )
          }
    </div>
  )
}

const Loader = (): JSX.Element => {
  return (
    <div className='relative w-64 h-64 rounded-full loader-3d'>
      <img className='w-full h-full' src='/creator/3.svg' alt='' />
      <img className='w-full h-full' src='/creator/4.svg' alt='' />
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
    <div className='h-8 relative overflow-hidden'>
      <p className='m-auto px-3 bg-gray-500 text-white font-semibold rounded-full  text-center line-up'>{DROPPER_LOADING_TEXT_LIST[textIndex]}</p>
    </div>
  )
}
