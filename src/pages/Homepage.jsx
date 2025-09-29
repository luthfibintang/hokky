import React from 'react'
import Layout from '../layouts/Layout'
import { ASSETS, CONTENT } from '../assets'
import { PrimaryButton, SecondaryButton } from '../components/ButtonComponents'
import ServiceCard from '../components/ServiceCard'

function Homepage() {
  return (
    <Layout>
      {/* Section 1: Hero */}
      <section className='h-screen flex px-36 py-24 items-end'>
        {/* Background */}
        <div className='absolute inset-0 -z-10'>
          <img src={ASSETS.hero.bgImage} alt="hero background image" className='object-cover w-full h-full'/>
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
      <section className='h-screen flex px-36 py-24 items-center relative'>
        {/* Background */}
        <div className='absolute inset-0 -z-10'>
          <img src={ASSETS.about.bgImage} alt="about us background image" className='object-cover w-full h-full -z-5'/>
        </div>  
        <div className='absolute inset-0 bg-secondary/75 -z-10'/>
        
        {/* Content */}
        <div className='w-full h-full flex justify-between'>
          {/* Left Side Content */}
          <div className='flex flex-col w-[720px] justify-center gap-12'>
            {/* Heading Content */}
            <div className='flex flex-col gap-6'>
              <h1 className='text-xl font-semibold text-primary'>{CONTENT.about.title}</h1>
              <h2 className='text-5xl font-semibold text-primary'>{CONTENT.about.subtitle}</h2>
            </div>
            {/* Description Content */}
            <div className='flex flex-col gap-6 leading-7'>
              <p className='text-primary'>{CONTENT.about.description[0]}</p>
              <p className='text-primary'>{CONTENT.about.description[1]}</p>
            </div>
            <div>
              <PrimaryButton onClick={() => console.log('Go to contact')}>
                {CONTENT.about.cta}
              </PrimaryButton>
            </div>
          </div>

          {/* Right Side Content */}
          <div className='w-xl relative'>
            {/* First Image */}
            <div className='absolute right-0 top-8 w-[450px] h-[350px] rounded-4xl overflow-hidden'>
              <img src={ASSETS.about.contentImage1} alt="About Content Image 1" className='object-cover h-full'/>
            </div>

            {/* Second Image */}
            <div className='absolute left- 0 bottom-8 w-[450px] h-[350px] rounded-4xl overflow-hidden'>
              <img src={ASSETS.about.contentImage2} alt="About Content Image 2" className='object-cover h-full'/>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className='min-h-screen flex flex-col px-36 py-24 bg-secondary gap-12'>
        {/* Heading and Description */}
        <div className='flex flex-col items-center h-full gap-8'>
          <h1 className='text-xl font-semibold text-primary'>{CONTENT.services.title}</h1>
          <h2 className='text-5xl font-semibold text-primary'>{CONTENT.services.subtitle}</h2>
          <p className='text-center text-primary'>{CONTENT.services.description}</p>
        </div>

        {/* Service card */}
        <div className='flex justify-center items-center gap-8'>
          {CONTENT.services.servicesCard.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.serviceImageUrl}
              servicesTitle={service.serviceTitle}
              servicesDescription={service.serviceDescription}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Homepage