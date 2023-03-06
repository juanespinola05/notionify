import { ReactElement, useState } from 'react'

export default function DrawerMenu (): ReactElement {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='drawer drawer-mobile'>
      <input id='my-drawer-2' type='checkbox' checked={isOpen} onChange={() => setIsOpen(!isOpen)} className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        <label htmlFor='my-drawer-2' className='btn btn-primary drawer-button lg:hidden'>Open drawer</label>

      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay' />
        <ul className='menu p-4 w-80 bg-base-100 text-base-content'>

          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>

      </div>
    </div>
  )
}
