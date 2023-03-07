import { ReactNode, useState } from 'react'
import useAvatarCanvas from '../hooks/useAvatarCanvas'

interface ModalProps {
  label?: string | JSX.Element
  children?: ReactNode | ReactNode[]
}

type AllowedFormats = 'png' | 'jpg'
type AllowedSizes = '300' | '1000'

const EXPORT_SIZES: AllowedSizes[] = ['300', '1000']
const EXPORT_FORMATS: AllowedFormats[] = ['png', 'jpg']

export default function ExportModal ({ label }: ModalProps): React.ReactElement {
  const [selectedSize, setSelectedSize] = useState<AllowedSizes>('300')
  const [selectedFormat, setSelectedFormat] = useState<AllowedFormats>('png')
  const { handleDownload } = useAvatarCanvas()

  return (
    <>
      <div data-tip='Download' className='tooltip'>
        <label htmlFor='my-modal-3' className='btn bg-black border-none hover:bg-black rounded-full'>{label}</label>
      </div>

      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label htmlFor='my-modal-3' className='btn btn-sm btn-circle absolute right-2 top-2 rounded-xl'>✕</label>
          <h3 className='text-lg font-bold '>Download avatar</h3>

          <div className='flex justify-between items-center pt-6 gap-6'>
            <div className='flex gap-4'>
              {
                EXPORT_SIZES.map((size) => (
                  <button onClick={() => setSelectedSize(size)} key={size} className={`btn ${selectedSize === size ? 'border-blue-400 hover:border-blue-400' : ''}`}>{size}</button>
                ))
              }
            </div>
            <div className='flex items-center gap-2'>
              {
                EXPORT_FORMATS.map((format) => (
                  <button onClick={() => setSelectedFormat(format)} key={format} className={`btn ${selectedFormat === format ? 'border-blue-400 hover:border-blue-400' : ''}`}>{format}</button>

                ))
              }
            </div>
          </div>
          <button disabled={(selectedSize.length === 0) || (selectedFormat.length === 0)} onClick={() => handleDownload({ format: selectedFormat, size: selectedSize })} className='btn text-white mt-6 w-full border-none hover:bg-blue-400 bg-blue-400'>Download</button>

        </div>
      </div>
    </>
  )
}
