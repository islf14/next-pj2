import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-slate-400 mb-4 flex justify-between items-center px-20 p-3 font-bold text-black'>
      <Link href={'/'}>Home</Link>
      <ul>
        <li>
          <Link href={'/about'}>Users</Link>
        </li>
      </ul>
    </nav>
  )
}
