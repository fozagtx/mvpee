import { ReactNode } from 'react'

interface HeaderBaseProps{
    leftContent: React.ReactNode,
    rightContent: React.ReactNode,
    className?:string
}


export const HeaderBase = ({leftContent, rightContent, className} : HeaderBaseProps) => {
   return (
< header  className='flex justify-center bg-white'>
<div>{leftContent}</div>
<div>{rightContent}</div>
</header>
   )
} 