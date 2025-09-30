import React from 'react'
import Layout from '../layouts/Layout'
import { ASSETS, CONTENT } from '../assets'
import { PrimaryButton, SecondaryButton, SecondaryButtonRevert } from '../components/ButtonComponents'
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

      {/* Section 4: Workflow */}
      <section className='min-h-screen flex gap-16 px-36 py-24 relative items-center'>
          <div className='absolute inset-0 -z-10'>
            <img src={ASSETS.workflow.bgImage} alt="workflow background image" className='object-cover w-full h-full -z-5'/>
          </div>  
          <div className='absolute inset-0 bg-neutralDark/80 -z-10'/>

          {/* Left side */}
          <div className='flex flex-col relative w-[550px] h-[728px] bg-primary/65 rounded-lg overflow-hidden p-12 gap-8'>
            <div className='absolute inset-0 -z-10'>
              <img src={ASSETS.workflow.bgCard} alt="Background Card" className='object-cover w-full h-full'/>
            </div>
            
            <div className='text-secondary flex flex-col gap-4'>
              <h1 className='text-xl'>{CONTENT.workflow.title}</h1>
              <h2 className='text-5xl'>{CONTENT.workflow.subtitle}</h2>
            </div>
            <p className='text-secondary'>{CONTENT.workflow.description}</p>
          </div>

          {/* Right Side */}
          <div className='flex flex-col w-[940px] h-[728px] justify-between'>
            <div className='flex w-full text-secondary gap-10'>
              <div className='flex flex-col gap-3'>
                <p className='text-xl'>{CONTENT.workflow.workflowCard[0].no}</p>
                <h3 className='text-4xl'>{CONTENT.workflow.workflowCard[0].flowName}</h3>
                <p>{CONTENT.workflow.workflowCard[0].flowDescription}</p>
              </div>

              <div className='flex flex-col gap-3'>
                <p className='text-xl'>{CONTENT.workflow.workflowCard[1].no}</p>
                <h3 className='text-4xl'>{CONTENT.workflow.workflowCard[1].flowName}</h3>
                <p>{CONTENT.workflow.workflowCard[1].flowDescription}</p>
              </div>
            </div>

            <div className='flex w-full text-secondary gap-10'>
              <div className='flex flex-col gap-3'>
                <p className='text-xl'>{CONTENT.workflow.workflowCard[2].no}</p>
                <h3 className='text-4xl'>{CONTENT.workflow.workflowCard[2].flowName}</h3>
                <p>{CONTENT.workflow.workflowCard[2].flowDescription}</p>
              </div>

              <div className='flex flex-col gap-3'>
                <p className='text-xl'>{CONTENT.workflow.workflowCard[3].no}</p>
                <h3 className='text-4xl'>{CONTENT.workflow.workflowCard[3].flowName}</h3>
                <p>{CONTENT.workflow.workflowCard[3].flowDescription}</p>
              </div>
            </div>

            <div className='flex w-full text-secondary gap-10'>
              <div className='flex flex-col gap-3'>
                <p className='text-xl'>{CONTENT.workflow.workflowCard[4].no}</p>
                <h3 className='text-4xl'>{CONTENT.workflow.workflowCard[4].flowName}</h3>
                <p>{CONTENT.workflow.workflowCard[4].flowDescription}</p>
              </div>
            </div>
          </div>
      </section>
      
      {/* Section 5: Portfolio */}
      <section className='min-h-screen flex flex-col gap-16 px-36 py-24 items-center bg-secondary'>
        {/* Portfolio Heading & Description */}
        <div className='flex flex-col w-full gap-6 items-center text-primary'>
          <h1 className='text-xl font-semibold'>{CONTENT.portfolio.title}</h1>
          <h2 className='text-5xl font-semibold'>{CONTENT.portfolio.subtitle}</h2>
          <p className='text-center'>{CONTENT.portfolio.description}</p>
        </div>

        {/* Portfolio Card */}
        <div className='flex gap-10 h-140 w-full'>
          {/* Portfolio Card 1 */}
          <div className='flex items-end h-full w-2/5 relative p-8 overflow-hidden rounded-lg'>
            <div className='absolute inset-0'>
              <img src={CONTENT.portfolio.portfolioCard[0].portfolioImageUrl} alt="Portfolio background image" className='object-cover w-full h-full'/>
            </div> 
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className='z-1 text-secondary flex flex-col gap-2'>
              <p className='text-xl font-semibold'>{CONTENT.portfolio.portfolioCard[0].portfolioTitle}</p>
              <p className='text-sm'>{CONTENT.portfolio.portfolioCard[0].portfolioLocation}</p>
            </div>
          </div>

          <div className='flex flex-col gap-10 h-full w-3/5 '>
            <div className='flex w-full flex-1 gap-10'>
              {/* Portfolio Card 2 */}
              <div className='flex items-end flex-1 relative overflow-hidden p-8 rounded-lg'>
                <div className='absolute inset-0'>
                  <img src={CONTENT.portfolio.portfolioCard[1].portfolioImageUrl} alt="Portfolio background image" className='object-cover w-full h-full'/>
                </div> 
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className='z-1 text-secondary flex flex-col gap-2'>
                  <p className='text-xl font-semibold'>{CONTENT.portfolio.portfolioCard[1].portfolioTitle}</p>
                  <p className='text-sm'>{CONTENT.portfolio.portfolioCard[1].portfolioLocation}</p>
                </div>
              </div>

              {/* Portfolio Card 3 */}
              <div className='flex items-end flex-1 relative p-8 overflow-hidden rounded-lg'>
                <div className='absolute inset-0'>
                  <img src={CONTENT.portfolio.portfolioCard[2].portfolioImageUrl} alt="Portfolio background image" className='object-cover w-full h-full'/>
                </div> 
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className='z-1 text-secondary flex flex-col gap-2'>
                  <p className='text-xl font-semibold'>{CONTENT.portfolio.portfolioCard[2].portfolioTitle}</p>
                  <p className='text-sm'>{CONTENT.portfolio.portfolioCard[2].portfolioLocation}</p>
                </div>
              </div>
            </div>
            
            {/* Portofolio Card 4 */}
            <di className='flex items-end flex-1 relative p-8 overflow-hidden rounded-lg'>
              <div className='absolute inset-0'>
                <img src={CONTENT.portfolio.portfolioCard[3].portfolioImageUrl} alt="Portfolio background image" className='object-cover w-full h-full'/>
              </div> 
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className='z-1 text-secondary flex flex-col gap-2'>
                <p className='text-xl font-semibold'>{CONTENT.portfolio.portfolioCard[3].portfolioTitle}</p>
                <p className='text-sm'>{CONTENT.portfolio.portfolioCard[3].portfolioLocation}</p>
              </div>
            </di>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <SecondaryButton onClick={() => console.log('Go to contact')}>
              {CONTENT.portfolio.cta}
          </SecondaryButton>
        </div>

      </section>
      
      {/* Section 6: Why Us? */}
      <section className='min-h-screen flex flex-col gap-16 px-36 py-24 items-center relative'>
          <div className='absolute inset-0 -z-10'>
            <img src={ASSETS.whyus.bgImage} alt="workflow background image" className='object-cover w-full h-full -z-5'/>
          </div>  
          <div className='absolute inset-0 bg-primary/80 -z-10'/>

          {/* Heading and our advantage*/}
          <div className='flex w-full h-140 gap-12'>
            {/* Heading */}
            <div className='flex-1 flex flex-col h-full text-secondary gap-12'>
              <div className='flex flex-col gap-6'>
                <h1 className='text-5xl font-semibold'>{CONTENT.whyUs.title}</h1>
                <h2 className='text-xl font-semibold'>{CONTENT.whyUs.subtitle}</h2>
                <p className='leading-7'>{CONTENT.whyUs.description}</p>
              </div>
              <div>
                <SecondaryButtonRevert onClick={() => console.log('Go to contact')}>
                    {CONTENT.whyUs.cta}
                </SecondaryButtonRevert>
              </div>

            </div>

            {/* Our Advantage */}
            <div className='flex-1 flex flex-col h-full gap-8'>
              {CONTENT.whyUs.ourAdvantage.map((advantage, index) => (
                <>
                  <div className='flex gap-4 w-full items-start'>
                    {/* Icons */}
                    <div className='p-3 rounded-full border-1 border-secondary'>
                      <img src={advantage.iconUrl} className='w-6'/> 
                    </div>
                    <div className='flex-1 flex flex-col gap-2 text-secondary'>
                      <p className='font-semibold'>{advantage.advantageTitle}</p>
                      <p className='text-sm'>{advantage.advantageDescription}</p>
                    </div>
                  </div>
                  <div className='w-full h-[1px] bg-secondary/25 rounded-full' />
                </>
              ))}
            </div>

          </div>

          {/* Statistic */}
          <div className='h-[200px] w-full flex gap-6 items-center justify-evenly rounded-4xl bg-primary p-6'>
              {CONTENT.whyUs.statistics.map((stat, index) => (
                <>
                  <div className='flex flex-col items-center gap-4 max-w-60 text-secondary'>
                    <h2 className='text-4xl font-semibold'>{stat.value}</h2>
                    <p className='text-center'>{stat.description}</p>
                  </div>
                  {index < CONTENT.whyUs.ourAdvantage.length - 1 && (
                    <div className='w-[2px] h-full bg-secondary/25 rounded-full' />
                  )}
                </>
              ))}
          </div>
      </section>
      

    </Layout>
  )
}

export default Homepage