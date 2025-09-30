import React from 'react'
import MapStyleSwitcher from '../components/MapStyleSwitcher'

function Footer() {
  return (
    <footer className='w-full flex flex-col items-start gap-16 px-4 pt-3 md:px-8 md:pt-6 lg:px-16 lg:pt-14 xl:px-24 xl:pt-20  bg-primary text-neutralLight'>
      {/* Information Section */}
      <section className='flex flex-row w-full justify-between'>
        {/* Company Information */}
        <div className='flex flex-col gap-8 max-w-[400px]'>
          <div className='flex flex-col gap-2 font-semibold'>
            <h1 className='text-5xl'>H'okky</h1>
            <h2 className='text-lg'>Upholstery Custom Furniture</h2>
          </div>
          <p>Kami adalah penyedia layanan upholstery custom furniture yang menghadirkan kenyamaanan, kualitas, dan desain sesuai dengan kebutuhan runag hunian maupun komersial.</p>
        </div>

        {/* Hyperlink & Location */}
        <div className='flex gap-24'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-xl font-semibold'>Company</h1>
            <ul className='flex flex-col gap-4'>
              <li><a href="/tentang-kami">Tentang Kami</a></li>
              <li><a href="/layanan">Layanan</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/kontak">Kontak</a></li>
            </ul>
          </div>

          <div className='flex flex-col gap-8'>
            <h1 className='text-xl font-semibold'>Kontak Kami</h1>
            <div className='flex flex-col gap-4'>
              <ul className='flex flex-col gap-4'>
                <li><a href="#" className='flex gap-2'><img src="/icons/mail.svg" width={20} height={20} alt="Mail icons" /> upholstery@hookey.com</a></li>
                <li><a href="#" className='flex gap-2'><img src="/icons/phone.svg" width={20} height={20} alt="Phone icons" /> +62 812-3456-7890</a></li>
              </ul>
              <p>Atau</p>
              <div className='flex gap-2'>
                <a href="#" className='flex gap-2'><img src="/icons/instagram.svg" width={20} height={20} alt="Instagram icons" /></a>
                <a href="#" className='flex gap-2'><img src="/icons/facebook.svg" width={20} height={20} alt="Facebook icons" /></a>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <h1 className='text-xl font-semibold'>Lokasi</h1>
            <div className='flex flex-col gap-4'>
              <MapStyleSwitcher
                lat={-6.301161198648552}
                lng={106.69354578147998}
                googleMapsLink="https://www.google.com/maps/dir/?api=1&destination=Jl.+Ir+H.+Juanda+No.88,+Cireundeu,+Kec.+Ciputat+Tim.,+Kota+Tangerang+Selatan,+Banten+15419"
                width="300px"
                height="100px"
                className="rounded-lg"
              />
              <p className='max-w-80'>Jl. Ir. H. Juanda No. 88A Cirendeu. Ciputat Timur Tangerang Selatan 1549</p>
            </div>
          </div>
        </div>
        
        
      </section>

      {/* Line */}
      {/* <hr className='bg-neutralLight/70 rounded-full h-[1px] w-full border-none'/> */}

      {/* Copyright Section */}
      <section className='w-full flex justify-between font-semibold text-sm border-t border-white py-8'>
        <div>©2025 Azisya Luthfi Bintang. All Rights reserved.</div>
        <a href='#'>Terms&Conditions - Privacy Policy</a>
      </section>
    </footer>
  )
}

export default Footer