import React from "react"

interface HeaderBaseProps{
    leftContent: React.ReactNode,
    rightContent: React.ReactNode,
    className?:string
}


export const HeaderBase = ({leftContent, rightContent, className} : HeaderBaseProps) => {
   return (
<header className={`flex justify-center bg-white || ${className}`}>
<div>{leftContent}</div>
<div>{rightContent}</div>
</header>
   )
} 