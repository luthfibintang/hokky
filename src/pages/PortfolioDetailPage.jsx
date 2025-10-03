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
      <section className='h-[50vh] w-full relative flex items-center justify-center'>
        <div className='absolute inset-0 -z-10'>
          <img src={ASSETS.portfolio.bgImage} alt='hero background image' className='object-cover object-[50%_60%] w-full h-full'/>
        </div>
        <div className='-z-10 absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent' />
        <div className='-z-10 absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent'/>
        <div className='flex flex-col items-center gap-4 text-primary px-8'>
          <h1 className='text-5xl font-semibold'>{item.title}</h1>
          <p className='text-sm font-medium'>client: {item.client}</p>
        </div>
      </section>

      {/* Descriptions */}
      <section className='w-full px-36 py-24 flex flex-col gap-28'>
        {/* Gambaran Proyek */}
        <div className='flex w-full gap-20 items-center'>
          <div className='flex-1 flex flex-col gap-10'>
            <h2 className='text-4xl md:text-5xl font-semibold text-primary'>Gambaran Proyek</h2>
            <p className='leading-7 text-primary/85 text-sm md:text-base'>{item.projectDescription}</p>
          </div>
          <div className='flex-1 h-[480px] rounded-3xl overflow-hidden shadow'>
            <img src={item.images[0]} alt={item.title} className='w-full h-full object-cover'/>
          </div>
        </div>

        {/* Hasil yang Kami Capai */}
  <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-6 w-full items-center'>
            <h2 className='text-4xl md:text-5xl font-semibold text-primary'>Hasil yang Kami Capai</h2>
            <p className='leading-7 text-primary/85 text-sm md:text-base '>{item.resultDescription}</p>
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
  const refs = useRef({})
  const [paused, setPaused] = useState(false)

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
  }, [animating, direction, incomingIndex, leftIndex, rightIndex, total])

  // Fixed card size per request within container padding px-36
  const CARD_W = 700
  const CARD_H = 450
  const GAP = 30
  const OFFSET = CARD_W/2 + GAP/2 // 400 + 60 = 460
  const EXIT = OFFSET * 3

  const endTransform = (s) => {
    switch (s) {
      case 'left': return `translateX(-${OFFSET}px)`
      case 'right': return `translateX(${OFFSET}px)`
      case 'to-left': return `translateX(-${OFFSET}px)`
      case 'to-right': return `translateX(${OFFSET}px)`
      case 'exit-left': return `translateX(-${EXIT}px)`
      case 'exit-right': return `translateX(${EXIT}px)`
      case 'enter-right': return `translateX(${OFFSET}px)`
      case 'enter-left': return `translateX(-${OFFSET}px)`
      default: return 'translateX(0)'
    }
  }
  const startTransform = (s) => {
    switch (s) {
      case 'left': return endTransform('left')
      case 'right': return endTransform('right')
      case 'to-left': return endTransform('right')
      case 'to-right': return endTransform('left')
      case 'exit-left': return endTransform('left')
      case 'exit-right': return endTransform('right')
      case 'enter-right': return `translateX(${EXIT}px)`
      case 'enter-left': return `translateX(-${EXIT}px)`
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
  }, [animating])

  return (
    <div className='flex flex-col gap-4 items-center'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
    <div className='relative w-full h-[450px] overflow-hidden flex items-center justify-center'>
        {rendered.map(obj => (
          <div
            key={obj.key}
            ref={el => { refs.current[obj.key] = el }}
            data-state={obj.state}
            className='absolute will-change-transform rounded-2xl overflow-hidden shadow'
            style={{
              width: CARD_W + 'px',
              height: CARD_H + 'px',
              transform: startTransform(obj.state),
              transition: `transform ${DURATION}ms cubic-bezier(0.25,0.8,0.3,1)`
            }}
          >
            <img src={images[obj.index]} alt={'gallery '+obj.index} className='object-cover w-full h-full'/>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-between w-full pt-4'>
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