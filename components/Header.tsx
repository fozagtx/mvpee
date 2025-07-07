import React from 'react'
import { HeaderBase } from "@/components/Header-base"


const leftContent = (
    <h1 className='mr-8 text-2xl text-black font-mono'>MVPE</h1>
)

const rightContent = (
         <nav className='flex justify-center font-mono'>
        <ul className='text-2xl text-black'>
            <li>Cal</li>
        </ul>
    </nav>
   )


export default function Header()  {
  return (
   <HeaderBase className='font-bold text-balance'
    leftContent={leftContent}
    rightContent={rightContent}
    />
   
  )
}

