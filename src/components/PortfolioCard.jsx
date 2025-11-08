import React from 'react'
import { Link } from 'react-router'

// size: 'sm' untuk baris 3 kolom, 'lg' untuk baris 2 kolom
export default function PortfolioCard({ id, image, title, client, size = 'sm' }) {
  // Mobile: semua ukuran sama. Desktop: berbeda sesuai size prop
  const sizeClass = size === 'lg' 
    ? 'w-full md:w-[550px] lg:w-[650px] xl:w-[691px] h-64 sm:h-72 md:h-[320px] lg:h-[350px]' 
    : 'w-full md:w-[360px] lg:w-[420px] xl:w-[450px] h-64 sm:h-72 md:h-[320px] lg:h-[350px]'
  
  return (
    <Link
      to={`/portfolio/${id}`}
      className={`relative ${sizeClass} rounded-xl overflow-hidden group shadow-sm cursor-pointer flex items-end p-4 sm:p-5`}
    >
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <img src={image} alt={title} className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-105'/>
      </div>
      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity'/>
      <div className='relative flex flex-col gap-1 text-secondary'>
        <h3 className='text-base sm:text-lg font-semibold drop-shadow-sm'>{title}</h3>
        <p className='text-[10px] sm:text-[11px] tracking-wide'>{client}</p>
      </div>
    </Link>
  )
}
