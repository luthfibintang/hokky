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
      <section className="h-[50vh] w-full relative flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={ASSETS.aboutUs.bgImage}
            alt="hero background image"
            className="object-cover object-[50%_60%] w-full h-full"
          />
        </div>
        <div className="-z-10 absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent" />
        <div className="-z-10 absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />

        <div className="flex flex-col items-center gap-6 text-primary px-8">
          <h1 className="text-5xl font-semibold">{CONTENT.aboutUs.title}</h1>
        </div>
      </section>

      {/* About Us Description */}
      <section className="w-full px-36 py-24 flex">
        {/* Gambaran Proyek */}
        <div className="flex w-full gap-20 items-center">
          <div className="flex-1 flex flex-col gap-12">
            <h2 className="text-4xl font-semibold text-primary">
              {CONTENT.aboutUs.about.title}
            </h2>
            <div className="flex flex-col gap-8">
              <p className="leading-7 text-primary/85 text-sm md:text-base">
                {CONTENT.aboutUs.about.description[0]}
              </p>
              <p className="leading-7 text-primary/85 text-sm md:text-base">
                {CONTENT.aboutUs.about.description[1]}
              </p>
            </div>
          </div>
          <div className="flex-1 h-[480px] rounded-3xl overflow-hidden shadow">
            <img
              src={CONTENT.aboutUs.about.contentImage}
              alt="About Us Content Image 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="w-full px-36 py-24 flex min-h-screen gap-20">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative h-[85%]">
            <div className="absolute right-0 w-[550px] h-[400px] rounded-3xl overflow-hidden">
              <img
                src={CONTENT.aboutUs.history.contentImage[0]}
                alt="Company History Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 w-[550px] h-[400px] rounded-3xl overflow-hidden">
              <img
                src={CONTENT.aboutUs.history.contentImage[1]}
                alt="Company History Image 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center gap-12">
          <h2 className="text-4xl font-semibold text-primary">
            {CONTENT.aboutUs.history.title}
          </h2>
          <div className="flex flex-col gap-8">
            <p className="leading-7 text-primary/85 text-sm md:text-base">
              {CONTENT.aboutUs.about.description[0]}
            </p>
            <p className="leading-7 text-primary/85 text-sm md:text-base">
              {CONTENT.aboutUs.about.description[1]}
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Why Us? */}
      <section className="min-h-screen flex flex-col gap-16 px-36 py-24 items-center relative">
        <div className="absolute inset-0 -z-10">
          <img
            src={ASSETS.homepage.whyus.bgImage}
            alt="workflow background image"
            className="object-cover w-full h-full -z-5"
          />
        </div>
        <div className="absolute inset-0 bg-primary/80 -z-10" />

        {/* Heading and our advantage*/}
        <div className="flex w-full h-140 gap-12">
          {/* Heading */}
          <div className="flex-1 flex flex-col h-full text-secondary gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-semibold">
                {CONTENT.homepage.whyUs.title}
              </h1>
              <h2 className="text-xl font-semibold">
                {CONTENT.homepage.whyUs.subtitle}
              </h2>
              <p className="leading-7">{CONTENT.homepage.whyUs.description}</p>
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
          <div className="flex-1 flex flex-col h-full gap-8">
            {CONTENT.homepage.whyUs.ourAdvantage.map((advantage, index) => (
              <>
                <div className="flex gap-4 w-full items-start">
                  {/* Icons */}
                  <div className="p-3 rounded-full border-1 border-secondary">
                    <img src={advantage.iconUrl} className="w-6" />
                  </div>
                  <div className="flex-1 flex flex-col gap-2 text-secondary">
                    <p className="font-semibold">{advantage.advantageTitle}</p>
                    <p className="text-sm">{advantage.advantageDescription}</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-secondary/25 rounded-full" />
              </>
            ))}
          </div>
        </div>

        {/* Statistic */}
        <div className="h-[200px] w-full flex gap-6 items-center justify-evenly rounded-4xl bg-primary p-6">
          {CONTENT.homepage.whyUs.statistics.map((stat, index) => (
            <>
              <div className="flex flex-col items-center gap-4 max-w-60 text-secondary">
                <h2 className="text-4xl font-semibold">{stat.value}</h2>
                <p className="text-center">{stat.description}</p>
              </div>
              {index < CONTENT.homepage.whyUs.ourAdvantage.length - 1 && (
                <div className="w-[2px] h-full bg-secondary/25 rounded-full" />
              )}
            </>
          ))}
        </div>
      </section>
      
      {/* Vision & Mission */}
      <section className="flex gap-20 px-36 py-24">
        {/* Visi */}
        <div className="flex-1 flex flex-col gap-12 px-10">
          <div className="flex gap-8 items-center">
            <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center">
              <img src={ASSETS.aboutUs.visiIcon} alt="Visi Icon" className="w-7" />
            </div>
            <h2 className="text-primary font-semibold text-3xl">{CONTENT.aboutUs.visionmision.visi.title}</h2>
          </div>
          <p className="leading-7 text-primary">{CONTENT.aboutUs.visionmision.visi.description}</p>
        </div>

        {/* Misi */}
        <div className="flex-1 flex flex-col gap-12 px-10">
          <div className="flex gap-8 items-center">
            <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center">
              <img src={ASSETS.aboutUs.misiIcon} alt="Visi Icon" className="w-7" />
            </div>
            <h2 className="text-primary font-semibold text-3xl">{CONTENT.aboutUs.visionmision.misi.title}</h2>
          </div>
          <ol className="leading-7 text-primary list-disc list-outside">
            {CONTENT.aboutUs.visionmision.misi.description.map(item => (
              <li>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* End Note */}
      <section className="flex flex-col items-center justify center bg-primary gap-12 px-36 py-24 border-b-1 border-secondary/20">
        <h2 className="text-secondary text-5xl font-semibold">{CONTENT.aboutUs.endNote.title}</h2>
        <p className="text-secondary">{CONTENT.aboutUs.endNote.subtitle}</p>

        <SecondaryButtonRevert onClick={() => openWhatsApp(WHATSAPP_MESSAGES.aboutUsContact)}>
          {CONTENT.aboutUs.endNote.cta}
        </SecondaryButtonRevert>
      </section>

    </Layout>
  );
}

export default AboutUsPage;
