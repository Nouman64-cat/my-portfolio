import React from 'react'
import Introduction from './introduction/Introduction'
import Experience from './experience/Experience'
import Projects from './projects/Projects'

const Right = () => {
  return (
    <div className='space-y-10'>
        <Introduction />
        <Experience />
        <Projects />
    </div>
  )
}

export default Right