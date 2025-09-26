import React from 'react'
import Layout from '../layouts/Layout'
import { ASSETS, CONTENT } from '../assets'
import { PrimaryButton, SecondaryButton } from '../components/ButtonComponents'

function Homepage() {
  return (
    <Layout>
      {/* Section 1: Hero */}
      <section className='min-h-screen flex px-[180px] py-[100px] items-end'>
        {/* Background Image */}
        <div className='absolute inset-0 bg-black -z-10'>
          <img src={ASSETS.hero.bgImage} alt="bg-img" className='object-cover w-full h-full'/>
        </div>

        {/* Content */}
        <div className='flex flex-col gap-8 max-w-4xl'>
          <h1 className='font-semibold text-5xl text-primary'>{CONTENT.hero.title}</h1>
          <p className='text-lg text-primary'>{CONTENT.hero.description}</p>
          <div>
            <PrimaryButton onClick={() => console.log('Go to contact')}>
              {CONTENT.hero.cta}
            </PrimaryButton>
          </div>
        </div>
      </section>
      
      {/* Section 2: About Us */}
      <section className='min-h-screen flex justify-center items-center bg-red-200 text-5xl'>This is about us</section>
    </Layout>
  )
}

export default Homepage