import React from 'react'

function ServiceCard({ image, servicesTitle, servicesDescription }) {
  return (
    <div className="relative w-full sm:w-80 md:w-96 h-96 sm:h-120 md:h-144 rounded-lg overflow-hidden group cursor-pointer py-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight">
          {servicesTitle}
        </h3>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          {servicesDescription}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard