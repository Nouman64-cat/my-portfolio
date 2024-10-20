import React from 'react'
import HomePage from './components/HomePage'
import Image from 'next/image'
import image from '@/public/anime-girl-in-nature-5k-u9-2560x1440.jpg'
const page = () => {
  return (
    <div>
      <Image src={image} alt="" width={2560} height={1440} />
      <HomePage />
    </div>
  )
}

export default page