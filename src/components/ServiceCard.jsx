import React from 'react'

function ServiceCard({ image, servicesTitle, servicesDescription }) {
  return (
    <div className="relative w-96 h-144 rounded-lg overflow-hidden group cursor-pointer py-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="relative  h-full flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold mb-3 leading-tight">
          {servicesTitle}
        </h3>
        <p className="text-gray-200 leading-relaxed">
          {servicesDescription}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard