import { ReactNode, useState } from 'react'

interface ModalProps {
  label?: string | JSX.Element
  children?: ReactNode | ReactNode[]
}

const EXPORT_SIZES = ['300', '500', '1000']
const EXPORT_FORMATS = ['PNG', 'JPG']

export default function ExportModal ({ label }: ModalProps): React.ReactElement {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedFormat, setSelectedFormat] = useState('')

  return (
    <>
      <label htmlFor='my-modal-3' className='btn'>{label}</label>

      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label htmlFor='my-modal-3' className='btn btn-sm btn-circle absolute right-2 top-2 rounded-xl'>✕</label>
          <h3 className='text-lg font-bold '>Export avatar</h3>

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
          <button disabled={!selectedSize || !selectedFormat} className='btn text-white mt-6 w-full border-none hover:bg-blue-400 bg-blue-400'>EXPORT</button>

        </div>
      </div>
    </>
  )
}
