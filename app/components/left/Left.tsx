import React from 'react'
import Header from './Header'
import IntersectionNavigation from './IntersectionNavigation'

const Left = () => {
  return (
    <div className='space-y-10'>
        <Header />
        <IntersectionNavigation />
    </div>
  )
}

export default Left