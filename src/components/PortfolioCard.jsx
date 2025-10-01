import React from 'react'

// size: 'sm' untuk baris 3 kolom, 'lg' untuk baris 2 kolom
export default function PortfolioCard({ image, title, client, size = 'sm' }) {
  const sizeClass = size === 'lg' ? 'w-[691px] h-[350px]' : 'w-[450px] h-[350px]'
  return (
    <div className={`relative ${sizeClass} rounded-xl overflow-hidden group shadow-sm cursor-pointer flex items-end p-5`}>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <img src={image} alt={title} className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'/>
      </div>
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity'/>
      <div className='relative flex flex-col gap-1 text-secondary'>
        <h3 className='text-lg font-semibold drop-shadow-sm'>{title}</h3>
        <p className='text-[11px] tracking-wide'>{client}</p>
      </div>
    </div>
  )
}
