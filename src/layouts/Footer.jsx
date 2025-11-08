import React from 'react'
import MapStyleSwitcher from '../components/MapStyleSwitcher'

function Footer() {
  return (
    <footer className='w-full flex flex-col items-start gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-12 md:pt-16 lg:pt-24 bg-primary text-neutralLight'>
      {/* Information Section */}
      <section className='flex flex-col lg:flex-row w-full justify-between gap-8 lg:gap-12'>
        {/* Company Information */}
        <div className='flex flex-col gap-4 md:gap-6 lg:gap-8 w-full lg:max-w-[400px]'>
          <div className='flex flex-col gap-2 font-semibold'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl'>H'okky</h1>
            <h2 className='text-base md:text-lg'>Upholstery Custom Furniture</h2>
          </div>
          <p className='text-sm md:text-base'>Kami adalah penyedia layanan upholstery custom furniture yang menghadirkan kenyamaanan, kualitas, dan desain sesuai dengan kebutuhan runag hunian maupun komersial.</p>
        </div>

        {/* Hyperlink & Location */}
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 w-full lg:w-auto'>
          <div className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
            <h1 className='text-lg md:text-xl font-semibold'>Company</h1>
            <ul className='flex flex-col gap-2 md:gap-3 lg:gap-4 text-sm md:text-base'>
              <li><a href="/tentang-kami">Tentang Kami</a></li>
              <li><a href="/layanan">Layanan</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/kontak">Kontak</a></li>
            </ul>
          </div>

          <div className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
            <h1 className='text-lg md:text-xl font-semibold'>Kontak Kami</h1>
            <div className='flex flex-col gap-3 md:gap-4'>
              <ul className='flex flex-col gap-2 md:gap-3 lg:gap-4 text-sm md:text-base'>
                <li><a href="#" className='flex gap-2 items-center'><img src="/icons/mail.svg" width={18} height={18} alt="Mail icons" className='md:w-5 md:h-5' /> upholstery@hookey.com</a></li>
                <li><a href="#" className='flex gap-2 items-center'><img src="/icons/phone.svg" width={18} height={18} alt="Phone icons" className='md:w-5 md:h-5' /> +62 812-3456-7890</a></li>
              </ul>
              <p className='text-sm md:text-base'>Atau</p>
              <div className='flex gap-2 md:gap-3'>
                <a href="#" className='flex gap-2'><img src="/icons/instagram.svg" width={18} height={18} alt="Instagram icons" className='md:w-5 md:h-5' /></a>
                <a href="#" className='flex gap-2'><img src="/icons/facebook.svg" width={18} height={18} alt="Facebook icons" className='md:w-5 md:h-5' /></a>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4 md:gap-6'>
            <h1 className='text-lg md:text-xl font-semibold'>Lokasi</h1>
            <div className='flex flex-col gap-3 md:gap-4'>
              <MapStyleSwitcher
                lat={-6.301161198648552}
                lng={106.69354578147998}
                googleMapsLink="https://www.google.com/maps/dir/?api=1&destination=Jl.+Ir+H.+Juanda+No.88,+Cireundeu,+Kec.+Ciputat+Tim.,+Kota+Tangerang+Selatan,+Banten+15419"
                width="100%"
                height="100px"
                className="rounded-lg max-w-[300px]"
              />
              <p className='max-w-80 text-sm md:text-base'>Jl. Ir. H. Juanda No. 88A Cirendeu. Ciputat Timur Tangerang Selatan 1549</p>
            </div>
          </div>
        </div>
        
        
      </section>

      {/* Line */}
      {/* <hr className='bg-neutralLight/70 rounded-full h-[1px] w-full border-none'/> */}

      {/* Copyright Section */}
      <section className='w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0 font-semibold text-xs sm:text-sm border-t border-white py-6 md:py-8'>
        <div className='text-center sm:text-left'>©2025 Azisya Luthfi Bintang. All Rights reserved.</div>
        <a href='#' className='text-center sm:text-right'>Terms&Conditions - Privacy Policy</a>
      </section>
    </footer>
  )
}

export default Footer