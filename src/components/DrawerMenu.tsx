import { ReactElement, useState } from 'react'

export default function DrawerMenu (): ReactElement {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='drawer-side'>
      <label htmlFor='my-drawer' className='drawer-overlay' />
      <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  )
}
