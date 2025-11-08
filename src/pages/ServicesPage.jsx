import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import { ASSETS, CONTENT, WHATSAPP_MESSAGES } from "../assets";
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryButtonRevert,
} from "../components/ButtonComponents";
import { openWhatsApp } from "../utils/whatsapp";

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Services Header */}
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">{CONTENT.services.title}</h1>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-center z-10 max-w-7xl">
            {CONTENT.services.subtitle}
          </p>
        </div>
      </section>

      {/* Service Available */}
      <section className="min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col md:flex-row items-center justify-center bg-secondary gap-0">
        <div className="flex-1 w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] flex flex-col">
          <div className="w-full h-1/2 flex flex-col items-center gap-3 md:gap-4 justify-center p-4 sm:p-5 md:p-7 bg-primary text-secondary order-1 md:order-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
              {CONTENT.services.availableServices[0].serviceTitle}
            </h2>
            <p className="leading-6 md:leading-7 text-center text-sm sm:text-base">
              {CONTENT.services.availableServices[0].description}
            </p>
          </div>
          <div className="w-full h-1/2 order-2 md:order-1">
            <img
              src={ASSETS.service.available1}
              alt="Available Service Image 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] flex flex-col">
          <div className="w-full h-1/2 flex flex-col items-center gap-3 md:gap-4 justify-center p-4 sm:p-5 md:p-7 bg-primary text-secondary order-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
              {CONTENT.services.availableServices[1].serviceTitle}
            </h2>
            <p className="leading-6 md:leading-7 text-center text-sm sm:text-base">
              {CONTENT.services.availableServices[1].description}
            </p>
          </div>
          <div className="w-full h-1/2 order-2">
            <img
              src={ASSETS.service.available2}
              alt="Available Service Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] flex flex-col">
          <div className="w-full h-1/2 flex flex-col items-center gap-3 md:gap-4 justify-center p-4 sm:p-5 md:p-7 bg-primary text-secondary order-1 md:order-2">
            <h2 className="text-lg sm:text-xl md:text-2xl text-center font-semibold">
              {CONTENT.services.availableServices[2].serviceTitle}
            </h2>
            <p className="leading-6 md:leading-7 text-center text-sm sm:text-base">
              {CONTENT.services.availableServices[2].description}
            </p>
          </div>
          <div className="w-full h-1/2 order-2 md:order-1">
            <img
              src={ASSETS.service.available3}
              alt="Available Service Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="flex flex-col">
        {/* Upholstery & Reupholstery */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row justify-between gap-8 md:gap-10 lg:gap-12 items-center bg-primary">
          <div className="w-full lg:max-w-[740px] flex flex-col gap-6 md:gap-8 lg:gap-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-secondary">
              {CONTENT.services.serviceDetail[0].title}
            </h2>
            <p className="leading-6 md:leading-7 text-secondary text-sm sm:text-base">
              {CONTENT.services.serviceDetail[0].description}
            </p>
          </div>
          <div className="w-full lg:w-[500px] xl:w-[600px] h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden">
            <img
              src={ASSETS.service.detail1}
              alt="Service Detail Image 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Custom Made */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col-reverse lg:flex-row justify-between gap-8 md:gap-10 lg:gap-12 items-center bg-secondary">
          <div className="w-full lg:w-[500px] xl:w-[600px] h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden">
            <img
              src={ASSETS.service.detail2}
              alt="Service Detail Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:max-w-[740px] flex flex-col gap-6 md:gap-8 lg:gap-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary">
              {CONTENT.services.serviceDetail[1].title}
            </h2>
            <p className="leading-6 md:leading-7 text-primary text-sm sm:text-base">
              {CONTENT.services.serviceDetail[1].description}
            </p>
          </div>
        </div>

        {/* Material Consultation & Design Support  */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row justify-between gap-8 md:gap-10 lg:gap-12 items-center bg-primary">
          <div className="w-full lg:max-w-[740px] flex flex-col gap-6 md:gap-8 lg:gap-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-secondary">
              {CONTENT.services.serviceDetail[2].title}
            </h2>
            <p className="leading-6 md:leading-7 text-secondary text-sm sm:text-base">
              {CONTENT.services.serviceDetail[2].description}
            </p>
          </div>
          <div className="w-full lg:w-[500px] xl:w-[600px] h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden">
            <img
              src={ASSETS.service.detail3}
              alt="Service Detail Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="min-h-screen flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 relative items-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={ASSETS.homepage.workflow.bgImage}
            alt="workflow background image"
            className="object-cover w-full h-full -z-5"
          />
        </div>
        <div className="absolute inset-0 bg-neutralDark/80 -z-10" />

        {/* Left side */}
        <div className="flex flex-col relative w-full lg:w-[450px] xl:w-[550px] min-h-[400px] lg:h-[728px] bg-primary/65 rounded-lg overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 gap-4 sm:gap-6 md:gap-8">
          <div className="absolute inset-0 -z-10">
            <img
              src={ASSETS.homepage.workflow.bgCard}
              alt="Background Card"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="text-secondary flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h1 className="text-base sm:text-lg md:text-xl">{CONTENT.homepage.workflow.title}</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl">{CONTENT.homepage.workflow.subtitle}</h2>
          </div>
          <p className="text-secondary text-sm sm:text-base">
            {CONTENT.homepage.workflow.description}
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-full lg:w-[700px] xl:w-[940px] gap-6 md:gap-8 lg:gap-12 lg:h-[728px] lg:justify-between">
          <div className="flex flex-col sm:flex-row w-full text-secondary gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-base sm:text-lg md:text-xl">
                {CONTENT.homepage.workflow.workflowCard[0].no}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {CONTENT.homepage.workflow.workflowCard[0].flowName}
              </h3>
              <p className="text-sm sm:text-base">{CONTENT.homepage.workflow.workflowCard[0].flowDescription}</p>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-base sm:text-lg md:text-xl">
                {CONTENT.homepage.workflow.workflowCard[1].no}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {CONTENT.homepage.workflow.workflowCard[1].flowName}
              </h3>
              <p className="text-sm sm:text-base">{CONTENT.homepage.workflow.workflowCard[1].flowDescription}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full text-secondary gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-base sm:text-lg md:text-xl">
                {CONTENT.homepage.workflow.workflowCard[2].no}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {CONTENT.homepage.workflow.workflowCard[2].flowName}
              </h3>
              <p className="text-sm sm:text-base">{CONTENT.homepage.workflow.workflowCard[2].flowDescription}</p>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-base sm:text-lg md:text-xl">
                {CONTENT.homepage.workflow.workflowCard[3].no}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {CONTENT.homepage.workflow.workflowCard[3].flowName}
              </h3>
              <p className="text-sm sm:text-base">{CONTENT.homepage.workflow.workflowCard[3].flowDescription}</p>
            </div>
          </div>

          <div className="flex w-full text-secondary gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-base sm:text-lg md:text-xl">
                {CONTENT.homepage.workflow.workflowCard[4].no}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {CONTENT.homepage.workflow.workflowCard[4].flowName}
              </h3>
              <p className="text-sm sm:text-base">{CONTENT.homepage.workflow.workflowCard[4].flowDescription}</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Note */}
      <section className="flex flex-col items-center justify-center bg-primary gap-6 md:gap-8 lg:gap-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 border-b-1 border-secondary/20">
        <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center">
          {CONTENT.services.endNote.title}
        </h2>
        <p className="text-secondary text-sm sm:text-base text-center">{CONTENT.services.endNote.subtitle}</p>

        <SecondaryButtonRevert onClick={() => openWhatsApp(WHATSAPP_MESSAGES.servicesConsultation)}>
          {CONTENT.services.endNote.cta}
        </SecondaryButtonRevert>
      </section>
    </Layout>
  );
}

export default ServicesPage;
