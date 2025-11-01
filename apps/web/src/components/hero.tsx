import React from 'react';
import Header from '@/components/header';
export default function Hero() {
  return (
    <div className='flex flex-col min-h-screen'>
          <Header />
      <div className="flex flex-col justify-center items-center text-center px-4 pt-[15%]">
      <h1 className="text-4xl font-bold">Test the best models suitable for your MVP</h1>
      </div>
    </div>

  );
}
