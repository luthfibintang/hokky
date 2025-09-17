import React from 'react'
import Layout from '../layouts/Layout'

function Homepage() {
  return (
    <Layout>
      {/* Section 1: Hero */}
      <section className='min-h-screen flex justify-center items-center bg-yellow-200 text-5xl'>This is homepage</section>
      {/* Section 2: About Us */}
      <section className='min-h-screen flex justify-center items-center bg-red-200 text-5xl'>This is about us</section>
    </Layout>
  )
}

export default Homepage