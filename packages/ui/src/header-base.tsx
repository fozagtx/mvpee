import { ReactNode } from "react"


interface HeaderBaseProps{
className?: string,
leftContent:ReactNode,
rightContent:ReactNode
  }


  export const HeaderBase = ({className, leftContent, rightContent}: HeaderBaseProps) => {
    return (
     <HeaderBase 
     className={className}

     leftContent={leftContent}
     rightContent={rightContent}
 />

    )
    


  }

  