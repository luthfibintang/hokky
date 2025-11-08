import React, { useEffect } from 'react'
import Layout from '../layouts/Layout'
import { ASSETS, CONTENT, WHATSAPP_MESSAGES } from '../assets'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { PrimaryButton, SecondaryButton, SecondaryButtonRevert } from '../components/ButtonComponents'
import ServiceCard from '../components/ServiceCard'
import { openWhatsApp } from '../utils/whatsapp'
import { Link } from 'react-router'

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      {/* Section 1: Hero */}
      <section className='min-h-screen flex px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 items-end'>
        {/* Background */}
        <div className='absolute inset-0 -z-10'>
          <img src={ASSETS.homepage.hero.bgImage} alt="hero background image" className='object-cover w-full h-full'/>
        </div>

        {/* Content */}
        <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl'>
          <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-primary'>{CONTENT.homepage.hero.title}</h1>
          <p className='text-sm sm:text-base md:text-lg text-primary'>{CONTENT.homepage.hero.description}</p>
          <div>
            <PrimaryButton onClick={() => openWhatsApp(WHATSAPP_MESSAGES.heroContact)}>
              {CONTENT.homepage.hero.cta}
            </PrimaryButton>
          </div>
        </div>
      </section>
      
      {/* Section 2: About Us */}
      <section className='min-h-screen flex px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 items-center relative'>
        {/* Background */}
        <div className='absolute inset-0 -z-10'>
          <img src={ASSETS.homepage.about.bgImage} alt="about us background image" className='object-cover w-full h-full -z-5'/>
        </div>  
        <div className='absolute inset-0 bg-secondary/75 -z-10'/>
        
        {/* Content */}
        <div className='w-full h-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-12'>
          {/* Left Side Content */}
          <div className='flex flex-col w-full lg:w-[720px] justify-center gap-6 md:gap-8 lg:gap-12'>
            {/* Heading Content */}
            <div className='flex flex-col gap-3 md:gap-4 lg:gap-6'>
              <h1 className='text-base sm:text-lg md:text-xl font-semibold text-primary'>{CONTENT.homepage.about.title}</h1>
              <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary'>{CONTENT.homepage.about.subtitle}</h2>
            </div>
            {/* Description Content */}
            <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 leading-6 md:leading-7 text-sm sm:text-base'>
              <p className='text-primary'>{CONTENT.homepage.about.description[0]}</p>
              <p className='text-primary'>{CONTENT.homepage.about.description[1]}</p>
            </div>
            <div>
              <Link to="/tentang-kami">
                <PrimaryButton>
                  {CONTENT.homepage.about.cta}
                </PrimaryButton>
              </Link>
            </div>
          </div>

          {/* Right Side Content */}
          <div className='hidden lg:flex w-full lg:w-xl relative min-h-[500px]'>
            {/* First Image */}
            <div className='absolute right-0 top-8 w-[350px] xl:w-[450px] h-[280px] xl:h-[350px] rounded-4xl overflow-hidden'>
              <img src={ASSETS.homepage.about.contentImage1} alt="About Content Image 1" className='object-cover h-full w-full'/>
            </div>

            {/* Second Image */}
            <div className='absolute left-0 bottom-8 w-[350px] xl:w-[450px] h-[280px] xl:h-[350px] rounded-4xl overflow-hidden'>
              <img src={ASSETS.homepage.about.contentImage2} alt="About Content Image 2" className='object-cover h-full w-full'/>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className='min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary gap-8 md:gap-10 lg:gap-12'>
        {/* Heading and Description */}
        <div className='flex flex-col items-center h-full gap-4 md:gap-6 lg:gap-8'>
          <h1 className='text-base sm:text-lg md:text-xl font-semibold text-primary'>{CONTENT.homepage.services.title}</h1>
          <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary text-center'>{CONTENT.homepage.services.subtitle}</h2>
          <p className='text-center text-primary text-sm sm:text-base max-w-3xl'>{CONTENT.homepage.services.description}</p>
        </div>

        {/* Service card */}
        <div className='flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 md:gap-8'>
          {CONTENT.homepage.services.servicesCard.map((service, index) => (
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
      <section className='min-h-screen flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 relative items-center'>
          <div className='absolute inset-0 -z-10'>
            <img src={ASSETS.homepage.workflow.bgImage} alt="workflow background image" className='object-cover w-full h-full -z-5'/>
          </div>  
          <div className='absolute inset-0 bg-neutralDark/80 -z-10'/>

          {/* Left side */}
          <div className='flex flex-col relative w-full lg:w-[450px] xl:w-[550px] min-h-[400px] lg:h-[728px] bg-primary/65 rounded-lg overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 gap-4 sm:gap-6 md:gap-8'>
            <div className='absolute inset-0 -z-10'>
              <img src={ASSETS.homepage.workflow.bgCard} alt="Background Card" className='object-cover w-full h-full'/>
            </div>
            
            <div className='text-secondary flex flex-col gap-2 sm:gap-3 md:gap-4'>
              <h1 className='text-base sm:text-lg md:text-xl'>{CONTENT.homepage.workflow.title}</h1>
              <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl'>{CONTENT.homepage.workflow.subtitle}</h2>
            </div>
            <p className='text-secondary text-sm sm:text-base'>{CONTENT.homepage.workflow.description}</p>
          </div>

          {/* Right Side */}
          <div className='flex flex-col w-full lg:w-[700px] xl:w-[940px] gap-6 md:gap-8 lg:gap-12 lg:h-[728px] lg:justify-between'>
            <div className='flex flex-col sm:flex-row w-full text-secondary gap-6 md:gap-8 lg:gap-10'>
              <div className='flex flex-col gap-2 md:gap-3'>
                <p className='text-base sm:text-lg md:text-xl'>{CONTENT.homepage.workflow.workflowCard[0].no}</p>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{CONTENT.homepage.workflow.workflowCard[0].flowName}</h3>
                <p className='text-sm sm:text-base'>{CONTENT.homepage.workflow.workflowCard[0].flowDescription}</p>
              </div>

              <div className='flex flex-col gap-2 md:gap-3'>
                <p className='text-base sm:text-lg md:text-xl'>{CONTENT.homepage.workflow.workflowCard[1].no}</p>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{CONTENT.homepage.workflow.workflowCard[1].flowName}</h3>
                <p className='text-sm sm:text-base'>{CONTENT.homepage.workflow.workflowCard[1].flowDescription}</p>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row w-full text-secondary gap-6 md:gap-8 lg:gap-10'>
              <div className='flex flex-col gap-2 md:gap-3'>
                <p className='text-base sm:text-lg md:text-xl'>{CONTENT.homepage.workflow.workflowCard[2].no}</p>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{CONTENT.homepage.workflow.workflowCard[2].flowName}</h3>
                <p className='text-sm sm:text-base'>{CONTENT.homepage.workflow.workflowCard[2].flowDescription}</p>
              </div>

              <div className='flex flex-col gap-2 md:gap-3'>
                <p className='text-base sm:text-lg md:text-xl'>{CONTENT.homepage.workflow.workflowCard[3].no}</p>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{CONTENT.homepage.workflow.workflowCard[3].flowName}</h3>
                <p className='text-sm sm:text-base'>{CONTENT.homepage.workflow.workflowCard[3].flowDescription}</p>
              </div>
            </div>

            <div className='flex w-full text-secondary'>
              <div className='flex flex-col gap-2 md:gap-3'>
                <p className='text-base sm:text-lg md:text-xl'>{CONTENT.homepage.workflow.workflowCard[4].no}</p>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{CONTENT.homepage.workflow.workflowCard[4].flowName}</h3>
                <p className='text-sm sm:text-base'>{CONTENT.homepage.workflow.workflowCard[4].flowDescription}</p>
              </div>
            </div>
          </div>
      </section>
      
      {/* Section 5: Portfolio */}
      <section className='min-h-screen flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 items-center bg-secondary'>
        {/* Portfolio Heading & Description */}
        <div className='flex flex-col w-full gap-3 md:gap-4 lg:gap-6 items-center text-primary'>
          <h1 className='text-base sm:text-lg md:text-xl font-semibold'>{CONTENT.homepage.portfolio.title}</h1>
          <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center'>{CONTENT.homepage.portfolio.subtitle}</h2>
          <p className='text-center text-sm sm:text-base max-w-3xl'>{CONTENT.homepage.portfolio.description}</p>
        </div>

        {/* Portfolio Card */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 h-auto md:h-140 w-full'>
          {/* Portfolio Card 1 */}
          <div className='flex items-end h-64 md:h-full w-full md:w-2/5 relative p-4 sm:p-6 md:p-8 overflow-hidden rounded-lg'>
            <div className='absolute inset-0'>
              <img src={CONTENT.homepage.portfolio.portfolioCard[0].portfolioImageUrl} alt="Portfolio background image" className='object-cover w-full h-full'/>
            </div> 
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className='z-1 text-secondary flex flex-col gap-1 md:gap-2'>
              <p className='text-base sm:text-lg md:text-xl font-semibold'>{CONTENT.homepage.portfolio.portfolioCard[0].portfolioTitle}</p>
              <p className='text-xs sm:text-sm'>{CONTENT.homepage.portfolio.portfolioCard[0].portfolioLocation}</p>
            </div>
          </div>

          <div className='flex flex-col gap-6 md:gap-8 lg:gap-10 h-auto md:h-full w-full md:w-3/5'>
            <div className='flex flex-col sm:flex-row w-full flex-1 gap-6 md:gap-8 lg:gap-10'>
              {/* Portfolio Card 2 */}
              <div className='flex items-end h-64 sm:flex-1 relative overflow-hidden p-4 sm:p-6 md:p-8 rounded-lg'>
                <div className='absolute inset-0'>
                  <img src={CONTENT.homepage.portfolio.portfolioCard[1].portfolioImageUrl} alt="Portfolio background image" className='object-cover w-full h-full'/>
                </div> 
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className='z-1 text-secondary flex flex-col gap-1 md:gap-2'>
                  <p className='text-base sm:text-lg md:text-xl font-semibold'>{CONTENT.homepage.portfolio.portfolioCard[1].portfolioTitle}</p>
                  <p className='text-xs sm:text-sm'>{CONTENT.homepage.portfolio.portfolioCard[1].portfolioLocation}</p>
                </div>
              </div>

              {/* Portfolio Card 3 */}
              <div className='flex items-end h-64 sm:flex-1 relative p-4 sm:p-6 md:p-8 overflow-hidden rounded-lg'>
                <div className='absolute inset-0'>
                  <img src={CONTENT.homepage.portfolio.portfolioCard[2].portfolioImageUrl} alt="Portfolio background image" className='object-cover w-full h-full'/>
                </div> 
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className='z-1 text-secondary flex flex-col gap-1 md:gap-2'>
                  <p className='text-base sm:text-lg md:text-xl font-semibold'>{CONTENT.homepage.portfolio.portfolioCard[2].portfolioTitle}</p>
                  <p className='text-xs sm:text-sm'>{CONTENT.homepage.portfolio.portfolioCard[2].portfolioLocation}</p>
                </div>
              </div>
            </div>
            
            {/* Portofolio Card 4 */}
            <div className='flex items-end h-64 sm:flex-1 relative p-4 sm:p-6 md:p-8 overflow-hidden rounded-lg'>
              <div className='absolute inset-0'>
                <img src={CONTENT.homepage.portfolio.portfolioCard[3].portfolioImageUrl} alt="Portfolio background image" className='object-cover w-full h-full'/>
              </div> 
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className='z-1 text-secondary flex flex-col gap-1 md:gap-2'>
                <p className='text-base sm:text-lg md:text-xl font-semibold'>{CONTENT.homepage.portfolio.portfolioCard[3].portfolioTitle}</p>
                <p className='text-xs sm:text-sm'>{CONTENT.homepage.portfolio.portfolioCard[3].portfolioLocation}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <Link to="/portfolio">
            <SecondaryButton>
                {CONTENT.homepage.portfolio.cta}
            </SecondaryButton>
          </Link>
        </div>

      </section>
      
      {/* Section 6: Why Us? */}
      <section className='min-h-screen flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 items-center relative'>
          <div className='absolute inset-0 -z-10'>
            <img src={ASSETS.homepage.whyus.bgImage} alt="workflow background image" className='object-cover w-full h-full -z-5'/>
          </div>  
          <div className='absolute inset-0 bg-primary/80 -z-10'/>

          {/* Heading and our advantage*/}
          <div className='flex flex-col lg:flex-row w-full h-auto lg:h-140 gap-8 md:gap-10 lg:gap-12'>
            {/* Heading */}
            <div className='flex-1 flex flex-col h-full text-secondary gap-6 md:gap-8 lg:gap-12'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold'>{CONTENT.homepage.whyUs.title}</h1>
                <h2 className='text-base sm:text-lg md:text-xl font-semibold'>{CONTENT.homepage.whyUs.subtitle}</h2>
              <p className='leading-6 md:leading-7 text-sm sm:text-base'>{CONTENT.homepage.whyUs.description}</p>
            </div>
            <div>
              <SecondaryButtonRevert onClick={() => openWhatsApp(WHATSAPP_MESSAGES.contact)}>
                  {CONTENT.homepage.whyUs.cta}
              </SecondaryButtonRevert>
            </div>

          </div>            {/* Our Advantage */}
            <div className='flex-1 flex flex-col h-full gap-4 md:gap-6 lg:gap-8'>
              {CONTENT.homepage.whyUs.ourAdvantage.map((advantage, index) => (
                <>
                  <div className='flex gap-3 md:gap-4 w-full items-start'>
                    {/* Icons */}
                    <div className='p-2 md:p-3 rounded-full border-1 border-secondary flex-shrink-0'>
                      <img src={advantage.iconUrl} className='w-5 md:w-6'/> 
                    </div>
                    <div className='flex-1 flex flex-col gap-1 md:gap-2 text-secondary'>
                      <p className='font-semibold text-sm sm:text-base'>{advantage.advantageTitle}</p>
                      <p className='text-xs sm:text-sm'>{advantage.advantageDescription}</p>
                    </div>
                  </div>
                  <div className='w-full h-[1px] bg-secondary/25 rounded-full' />
                </>
              ))}
            </div>

          </div>

          {/* Statistic */}
          <div className='min-h-[150px] sm:min-h-[180px] md:h-[200px] w-full flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-evenly rounded-2xl md:rounded-4xl bg-primary p-4 sm:p-6'>
              {CONTENT.homepage.whyUs.statistics.map((stat, index) => (
                <>
                  <div className='flex flex-col items-center gap-2 md:gap-4 max-w-60 text-secondary'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>{stat.value}</h2>
                    <p className='text-center text-xs sm:text-sm md:text-base'>{stat.description}</p>
                  </div>
                  {index < CONTENT.homepage.whyUs.ourAdvantage.length - 1 && (
                    <div className='w-full sm:w-[2px] h-[1px] sm:h-full bg-secondary/25 rounded-full' />
                  )}
                </>
              ))}
          </div>
      </section>
      
      {/* Section 7: Testimoni */}
      <section className='min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col gap-6 md:gap-8 lg:gap-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 items-center bg-secondary text-primary'>
        <div className='flex flex-col items-center gap-2 md:gap-4'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center'>{CONTENT.homepage.testimonials.title}</h2>
          <p className='text-xs sm:text-sm text-center'>{CONTENT.homepage.testimonials.subtitle}</p>
        </div>
        <TestimonialCarousel />
      </section>
    </Layout>
  )
}

export default Homepage