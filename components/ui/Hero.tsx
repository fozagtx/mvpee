import React from 'react'
import { Button } from "@/components/ui/button"


export default function Hero () {
  return (
      <div className="flex justify-center items-center min-h-screen bg-white">
     <h1 className="text-5xl self-center items-center text-center text-black gap-2 font-serif p-2">
       Adding technical seo to your mvp
      </h1>
      <Button>book a call</Button>
   </div>
  )
}
