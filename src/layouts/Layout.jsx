import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
      <Navbar/>
      <main className='flex flex-col'>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout