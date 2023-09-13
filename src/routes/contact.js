import React from 'react'
import Navbar from '../contaner/navbar'
import Fotter from '../contaner/footer'
import Img2 from '../contaner/img2'

export const contact = () => {
  return (
    <div>
      <Navbar/>
      <Img2 heading="Contact me" text="my info "/>
      <Fotter/>
    </div>
  )
}

export default contact