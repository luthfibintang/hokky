import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import { ASSETS, CONTENT, WHATSAPP_MESSAGES } from "../assets";
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryButtonRevert,
} from "../components/ButtonComponents";
import { openWhatsApp } from "../utils/whatsapp";

function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      {/* About Us Header */}
      <section className="h-[40vh] sm:h-[45vh] md:h-[50vh] w-full relative flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={ASSETS.aboutUs.bgImage}
            alt="hero background image"
            className="object-cover object-[50%_60%] w-full h-full"
          />
        </div>
        <div className="-z-10 absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent" />
        <div className="-z-10 absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />

        <div className="flex flex-col items-center gap-4 md:gap-6 text-primary px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">{CONTENT.aboutUs.title}</h1>
        </div>
      </section>

      {/* About Us Description */}
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 flex">
        {/* Gambaran Proyek */}
        <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
              {CONTENT.aboutUs.about.title}
            </h2>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <p className="leading-6 md:leading-7 text-primary/85 text-sm md:text-base">
                {CONTENT.aboutUs.about.description[0]}
              </p>
              <p className="leading-6 md:leading-7 text-primary/85 text-sm md:text-base">
                {CONTENT.aboutUs.about.description[1]}
              </p>
            </div>
          </div>
          <div className="flex-1 w-full h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow">
            <img
              src={CONTENT.aboutUs.about.contentImage}
              alt="About Us Content Image 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col-reverse lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center">
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="relative h-[450px] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[520px] 2xl:h-[580px] w-full max-w-[600px] mx-auto lg:mx-0">
            {/* Top Right Image */}
            <div className="absolute top-0 right-0 w-[70%] sm:w-[65%] md:w-[380px] lg:w-[340px] xl:w-[380px] 2xl:w-[420px] h-[52%] sm:h-[54%] md:h-[280px] lg:h-[260px] xl:h-[290px] 2xl:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <img
                src={CONTENT.aboutUs.history.contentImage[0]}
                alt="Company History Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-0 w-[70%] sm:w-[65%] md:w-[380px] lg:w-[340px] xl:w-[380px] 2xl:w-[420px] h-[52%] sm:h-[54%] md:h-[280px] lg:h-[260px] xl:h-[290px] 2xl:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <img
                src={CONTENT.aboutUs.history.contentImage[1]}
                alt="Company History Image 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 md:gap-8 lg:gap-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            {CONTENT.aboutUs.history.title}
          </h2>
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <p className="leading-6 md:leading-7 text-primary/85 text-sm md:text-base">
              {CONTENT.aboutUs.about.description[0]}
            </p>
            <p className="leading-6 md:leading-7 text-primary/85 text-sm md:text-base">
              {CONTENT.aboutUs.about.description[1]}
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Why Us? */}
      <section className="min-h-screen flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 items-center relative">
        <div className="absolute inset-0 -z-10">
          <img
            src={ASSETS.homepage.whyus.bgImage}
            alt="workflow background image"
            className="object-cover w-full h-full -z-5"
          />
        </div>
        <div className="absolute inset-0 bg-primary/80 -z-10" />

        {/* Heading and our advantage*/}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-140 gap-8 md:gap-10 lg:gap-12">
          {/* Heading */}
          <div className="flex-1 flex flex-col h-full text-secondary gap-6 md:gap-8 lg:gap-12">
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold">
                {CONTENT.homepage.whyUs.title}
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                {CONTENT.homepage.whyUs.subtitle}
              </h2>
              <p className="leading-6 md:leading-7 text-sm sm:text-base">{CONTENT.homepage.whyUs.description}</p>
            </div>
            <div>
              <SecondaryButtonRevert
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.contact)}
              >
                {CONTENT.homepage.whyUs.cta}
              </SecondaryButtonRevert>
            </div>
          </div>

          {/* Our Advantage */}
          <div className="flex-1 flex flex-col h-full gap-4 md:gap-6 lg:gap-8">
            {CONTENT.homepage.whyUs.ourAdvantage.map((advantage, index) => (
              <>
                <div className="flex gap-3 md:gap-4 w-full items-start">
                  {/* Icons */}
                  <div className="p-2 md:p-3 rounded-full border-1 border-secondary flex-shrink-0">
                    <img src={advantage.iconUrl} className="w-5 md:w-6" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 md:gap-2 text-secondary">
                    <p className="font-semibold text-sm sm:text-base">{advantage.advantageTitle}</p>
                    <p className="text-xs sm:text-sm">{advantage.advantageDescription}</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-secondary/25 rounded-full" />
              </>
            ))}
          </div>
        </div>

        {/* Statistic */}
        <div className="min-h-[150px] sm:min-h-[180px] md:h-[200px] w-full flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-evenly rounded-2xl md:rounded-4xl bg-primary p-4 sm:p-6">
          {CONTENT.homepage.whyUs.statistics.map((stat, index) => (
            <>
              <div className="flex flex-col items-center gap-2 md:gap-4 max-w-60 text-secondary">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{stat.value}</h2>
                <p className="text-center text-xs sm:text-sm md:text-base">{stat.description}</p>
              </div>
              {index < CONTENT.homepage.whyUs.ourAdvantage.length - 1 && (
                <div className="w-full sm:w-[2px] h-[1px] sm:h-full bg-secondary/25 rounded-full" />
              )}
            </>
          ))}
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Visi */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="bg-primary rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
              <img src={ASSETS.aboutUs.visiIcon} alt="Visi Icon" className="w-6 sm:w-7" />
            </div>
            <h2 className="text-primary font-semibold text-xl sm:text-2xl md:text-3xl">{CONTENT.aboutUs.visionmision.visi.title}</h2>
          </div>
          <p className="leading-6 md:leading-7 text-primary text-sm sm:text-base">{CONTENT.aboutUs.visionmision.visi.description}</p>
        </div>

        {/* Misi */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="bg-primary rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
              <img src={ASSETS.aboutUs.misiIcon} alt="Misi Icon" className="w-6 sm:w-7" />
            </div>
            <h2 className="text-primary font-semibold text-xl sm:text-2xl md:text-3xl">{CONTENT.aboutUs.visionmision.misi.title}</h2>
          </div>
          <ol className="leading-6 md:leading-7 text-primary text-sm sm:text-base list-disc list-outside pl-4 sm:pl-5">
            {CONTENT.aboutUs.visionmision.misi.description.map(item => (
              <li>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* End Note */}
      <section className="flex flex-col items-center justify-center bg-primary gap-6 md:gap-8 lg:gap-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 border-b-1 border-secondary/20">
        <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">{CONTENT.aboutUs.endNote.title}</h2>
        <p className="text-secondary text-sm sm:text-base text-center">{CONTENT.aboutUs.endNote.subtitle}</p>

        <SecondaryButtonRevert onClick={() => openWhatsApp(WHATSAPP_MESSAGES.aboutUsContact)}>
          {CONTENT.aboutUs.endNote.cta}
        </SecondaryButtonRevert>
      </section>

    </Layout>
  );
}

export default AboutUsPage;
