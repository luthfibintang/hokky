import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link } from 'react-router'
import { ASSETS, CONTENT } from '../assets'
import Layout from '../layouts/Layout'

function PortfolioDetailPage() {
  const { id } = useParams()
  const numericId = Number(id)
  const item = CONTENT?.portfolio?.items?.find(i => i.id === numericId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!item) {
    return (
      <Layout>
        <div className='py-40 text-center text-primary'>Proyek tidak ditemukan. <Link to='/portfolio' className='underline'>Kembali</Link></div>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* Header */}
      <section className='h-[40vh] sm:h-[45vh] md:h-[50vh] w-full relative flex items-center justify-center'>
        <div className='absolute inset-0 -z-10'>
          <img src={ASSETS.portfolio.bgImage} alt='hero background image' className='object-cover object-[50%_60%] w-full h-full'/>
        </div>
        <div className='-z-10 absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent' />
        <div className='-z-10 absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent'/>
        <div className='flex flex-col items-center gap-3 md:gap-4 text-primary px-4 sm:px-8'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-center'>{item.title}</h1>
          <p className='text-xs sm:text-sm font-medium'>client: {item.client}</p>
        </div>
      </section>

      {/* Descriptions */}
      <section className='w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-28'>
        {/* Gambaran Proyek */}
        <div className='flex flex-col lg:flex-row w-full gap-8 md:gap-12 lg:gap-20 items-center'>
          <div className='flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-primary'>Gambaran Proyek</h2>
            <p className='leading-6 md:leading-7 text-primary/85 text-sm md:text-base'>{item.projectDescription}</p>
          </div>
          <div className='flex-1 w-full h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow'>
            <img src={item.images[0]} alt={item.title} className='w-full h-full object-cover'/>
          </div>
        </div>

        {/* Hasil yang Kami Capai */}
        <div className='flex flex-col gap-8 md:gap-10 lg:gap-12'>
          <div className='flex flex-col gap-4 md:gap-6 w-full items-center'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-primary text-center'>Hasil yang Kami Capai</h2>
            <p className='leading-6 md:leading-7 text-primary/85 text-sm md:text-base text-center max-w-4xl'>{item.resultDescription}</p>
          </div>
          <GalleryCarousel images={item.images} />
        </div>
      </section>
    </Layout>
  )
}

// Reusable 2-up carousel based on testimonial logic (simplified)
function GalleryCarousel({ images = [] }) {
  const total = images.length
  const DURATION = 400
  const AUTO = 6000
  const [leftIndex, setLeftIndex] = useState(0)
  const [rightIndex, setRightIndex] = useState(1 % total)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState(null)
  const [incomingIndex, setIncomingIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const refs = useRef({})
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const goNext = useCallback(() => {
    if (animating || total < 3) { // still allow movement when total>2
      if (total === 2 && !animating) { // simple swap
        setLeftIndex(rightIndex)
        setRightIndex(leftIndex)
      }
      return
    }
    setDirection('next')
    setIncomingIndex((rightIndex + 1) % total)
    setAnimating(true)
  }, [animating, rightIndex, total, leftIndex])

  const goPrev = useCallback(() => {
    if (animating || total < 3) {
      if (total === 2 && !animating) {
        setLeftIndex(rightIndex)
        setRightIndex(leftIndex)
      }
      return
    }
    setDirection('prev')
    setIncomingIndex((leftIndex - 1 + total) % total)
    setAnimating(true)
  }, [animating, leftIndex, total, rightIndex])

  useEffect(() => {
    if (!animating) return
    const t = setTimeout(() => {
      if (direction === 'next') {
        setLeftIndex(rightIndex)
        setRightIndex(incomingIndex)
      } else if (direction === 'prev') {
        setRightIndex(leftIndex)
        setLeftIndex(incomingIndex)
      }
      setAnimating(false)
      setDirection(null)
      setIncomingIndex(null)
    }, DURATION)
    return () => clearTimeout(t)
  }, [animating, direction, incomingIndex, leftIndex, rightIndex])

  useEffect(() => {
    if (paused) return
    if (animating) return
    const id = setTimeout(() => goNext(), AUTO)
    return () => clearTimeout(id)
  }, [paused, animating, goNext, leftIndex, rightIndex])

  const rendered = useMemo(() => {
    if (total === 0) return []
    
    // Mobile: show only left card
    if (isMobile) {
      if (!animating) {
        return [{ key: 'l-' + leftIndex, index: leftIndex, state: 'center' }]
      }
      if (direction === 'next') {
        return [
          { key: 'exitL-' + leftIndex, index: leftIndex, state: 'exit-left' },
          { key: 'enterR-' + rightIndex, index: rightIndex, state: 'enter-right' }
        ]
      }
      if (direction === 'prev') {
        return [
          { key: 'exitL-' + leftIndex, index: leftIndex, state: 'exit-right' },
          { key: 'enterL-' + incomingIndex, index: incomingIndex, state: 'enter-left' }
        ]
      }
      return []
    }
    
    // Desktop: show both cards
    if (!animating) {
      return [
        { key: 'l-' + leftIndex, index: leftIndex, state: 'left' },
        { key: 'r-' + rightIndex, index: rightIndex, state: 'right' }
      ]
    }
    if (direction === 'next') {
      return [
        { key: 'exitL-' + leftIndex, index: leftIndex, state: 'exit-left' },
        { key: 'shiftR-' + rightIndex, index: rightIndex, state: 'to-left' },
        { key: 'enterR-' + incomingIndex, index: incomingIndex, state: 'enter-right' }
      ]
    }
    if (direction === 'prev') {
      return [
        { key: 'exitR-' + rightIndex, index: rightIndex, state: 'exit-right' },
        { key: 'shiftL-' + leftIndex, index: leftIndex, state: 'to-right' },
        { key: 'enterL-' + incomingIndex, index: incomingIndex, state: 'enter-left' }
      ]
    }
    return []
  }, [animating, direction, incomingIndex, leftIndex, rightIndex, total, isMobile])

  // Card dimensions
  const CARD_H = 450
  const GAP = 30

  const endTransform = (s) => {
    if (isMobile) {
      switch (s) {
        case 'center': return 'translateX(0)'
        case 'exit-left': return `translateX(-100%)`
        case 'exit-right': return `translateX(100%)`
        case 'enter-right': return 'translateX(0)'
        case 'enter-left': return 'translateX(0)'
        default: return 'translateX(0)'
      }
    }
    // Desktop: use percentage-based transforms so cards can shrink
    const OFFSET_PERCENT = 52 // percentage offset for dual cards
    switch (s) {
      case 'left': return `translateX(-${OFFSET_PERCENT}%)`
      case 'right': return `translateX(${OFFSET_PERCENT}%)`
      case 'to-left': return `translateX(-${OFFSET_PERCENT}%)`
      case 'to-right': return `translateX(${OFFSET_PERCENT}%)`
      case 'exit-left': return `translateX(-${OFFSET_PERCENT * 3}%)`
      case 'exit-right': return `translateX(${OFFSET_PERCENT * 3}%)`
      case 'enter-right': return `translateX(${OFFSET_PERCENT}%)`
      case 'enter-left': return `translateX(-${OFFSET_PERCENT}%)`
      default: return 'translateX(0)'
    }
  }
  const startTransform = (s) => {
    if (isMobile) {
      switch (s) {
        case 'center': return 'translateX(0)'
        case 'exit-left': return 'translateX(0)'
        case 'exit-right': return 'translateX(0)'
        case 'enter-right': return `translateX(100%)`
        case 'enter-left': return `translateX(-100%)`
        default: return 'translateX(0)'
      }
    }
    const OFFSET_PERCENT = 52
    switch (s) {
      case 'left': return endTransform('left')
      case 'right': return endTransform('right')
      case 'to-left': return endTransform('right')
      case 'to-right': return endTransform('left')
      case 'exit-left': return endTransform('left')
      case 'exit-right': return endTransform('right')
      case 'enter-right': return `translateX(${OFFSET_PERCENT * 3}%)`
      case 'enter-left': return `translateX(-${OFFSET_PERCENT * 3}%)`
      default: return 'translateX(0)'
    }
  }
  useEffect(() => {
    if (animating) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          Object.values(refs.current).forEach(el => {
            if (!el) return
            const s = el.dataset.state
            el.style.transform = endTransform(s)
          })
        })
      })
    }
  }, [animating, isMobile])

  return (
    <div className='flex flex-col gap-4 items-center w-full'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
    <div className='relative w-full max-w-7xl mx-auto h-[300px] sm:h-[350px] md:h-[450px] overflow-hidden flex items-center justify-center'>
        {rendered.map(obj => (
          <div
            key={obj.key}
            ref={el => { refs.current[obj.key] = el }}
            data-state={obj.state}
            className={`absolute will-change-transform rounded-xl md:rounded-2xl overflow-hidden shadow h-[300px] sm:h-[350px] md:h-[450px] ${
              isMobile 
                ? 'w-full max-w-[500px] sm:max-w-[600px]' 
                : 'w-[45%] max-w-[700px]'
            }`}
            style={{
              maxHeight: '90%',
              transform: startTransform(obj.state),
              transition: `transform ${DURATION}ms cubic-bezier(0.25,0.8,0.3,1)`
            }}
          >
            <img src={images[obj.index]} alt={'gallery '+obj.index} className='object-cover w-full h-full'/>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-between w-full max-w-7xl mx-auto pt-4'>
        <div className='text-xs tracking-wider text-primary/80 flex items-center gap-2 select-none'>
          <span>{leftIndex + 1}</span>
          <span className='opacity-40'>—</span>
          <span>{total}</span>
        </div>
        <div className='flex items-center gap-4'>
          <button aria-label='Sebelumnya' disabled={total<2} onClick={goPrev} className='w-8 h-8 rounded-full cursor-pointer text-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition disabled:opacity-30'>
            <svg viewBox='0 0 24 24' className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2'><path d='M15 18l-6-6 6-6' strokeLinecap='round' strokeLinejoin='round'/></svg>
          </button>
          <button aria-label='Berikutnya' disabled={total<2} onClick={goNext} className='w-8 h-8 rounded-full cursor-pointer text-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition disabled:opacity-30'>
            <svg viewBox='0 0 24 24' className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2'><path d='M9 6l6 6-6 6' strokeLinecap='round' strokeLinejoin='round'/></svg>
          </button>
        </div>
    </div>
  </div>
  )
}

export default PortfolioDetailPage