import React, { useMemo, useState, useEffect } from 'react'
import Layout from '../layouts/Layout'
import { ASSETS, CONTENT } from '../assets'
import PortfolioCard from '../components/PortfolioCard'

function PortfolioPage() {
  const categories = CONTENT.portfolio.categories
  const data = CONTENT.portfolio.items
  const [activeCategory, setActiveCategory] = useState('all')
  const filtered = useMemo(() => {
    return data.filter(item => activeCategory === 'all' || item.category === activeCategory)
  }, [data, activeCategory])

  // Pola baris: 3,2,3,2 (looping). Kita potong data sesuai pattern.
  const rowPattern = [3, 2, 3, 2]
  const rows = []
  let index = 0
  let patternIndex = 0
  while (index < filtered.length) {
    const expected = rowPattern[patternIndex % rowPattern.length]
    const slice = filtered.slice(index, index + expected)
    rows.push({ items: slice, expected })
    index += expected
    patternIndex++
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      {/* Portfolio Header */}
      <section className='h-[50vh] w-full relative flex items-center justify-center'>
        <div className='absolute inset-0 -z-10'>
          <img src={ASSETS.portfolio.bgImage} alt='hero background image' className='object-cover object-[50%_60%] w-full h-full'/>
        </div>
        <div className='-z-10 absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent' />
        <div className='-z-10 absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent'/>

        <div className='flex flex-col items-center gap-6 text-primary px-8'>
          <h1 className='text-5xl font-semibold'>{CONTENT.portfolio.title}</h1>
            <p className='text-lg font-semibold text-center z-10 max-w-6xl'>{CONTENT.portfolio.subtitle}</p>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className='py-16 flex flex-col gap-12 items-center'>
        {/* Filters */}
        <div className='flex flex-wrap items-center gap-4 justify-center'>
          {categories.map(cat => {
            const active = cat.key === activeCategory
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2 rounded-full border-1 cursor-pointer transition text-sm font-medium tracking-wide ${active ? 'bg-primary text-secondary border-primary' : 'bg-secondary text-primary border-primary hover:bg-primary hover:text-secondary'}`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Cards pattern rows */}
        <div className='flex flex-col gap-8 items-center'>
          {rows.map((row, rIndex) => {
            const { items, expected } = row
            const isTwoActual = items.length === 2
            const isTrueTwoPattern = isTwoActual && expected === 2 // baris memang direncanakan 2
            // Kasus khusus: baris diharapkan 3 tapi hanya punya 2 -> tetap gunakan size 'sm'
            return (
              <div key={rIndex} className='flex gap-8 justify-center'>
                {items.map(item => (
                  <PortfolioCard
                    key={item.id}
                    id={item.id}
                    image={item.images ? item.images[0] : item.image}
                    title={item.title}
                    client={item.client}
                    size={isTrueTwoPattern ? 'lg' : 'sm'}
                  />
                ))}
              </div>
            )
          })}
          {filtered.length === 0 && (
            <div className='text-center text-primary/60 text-sm py-10'>Tidak ada proyek.</div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default PortfolioPage