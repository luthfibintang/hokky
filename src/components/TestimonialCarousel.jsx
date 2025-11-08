import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CONTENT } from '../assets'

const testimonials = CONTENT.homepage.testimonials.testimonialCards
const DURATION = 400 // ms animation length
const AUTO_INTERVAL = 5000 // ms between automatic slides (sweet spot ~6s for reading)

// Card base with responsive width
const cardBaseSingle = 'w-full sm:w-[480px] md:w-[480px] lg:w-[500px] h-auto min-h-[200px] sm:min-h-[220px] md:min-h-[240px] bg-secondary border-1 border-primary rounded-xl p-4 sm:p-5 md:p-6 flex flex-col gap-2 sm:gap-3 text-primary shadow-sm'
// Dynamic width for dual mode: smaller on XL, larger on 2XL+
const cardBaseDual = 'w-[90%] max-w-[480px] 2xl:max-w-[550px] h-auto min-h-[240px] bg-secondary border-1 border-primary rounded-xl p-5 md:p-6 flex flex-col gap-3 text-primary shadow-sm'

function TestimonialCard({ data, isDualMode }) {
	if (!data) return null
	const cardClass = isDualMode ? cardBaseDual : cardBaseSingle
	
	return (
		<div className={cardClass}>
			<div className='flex items-center gap-2 sm:gap-3'>
				<div className='w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden shrink-0'>
					<img src={data.profileImage} alt={data.name} className='object-cover w-full h-full'/>
				</div>
				<div className='flex flex-col'>
					<p className='text-primary text-xs sm:text-sm font-semibold'>{data.name} | {data.position}</p>
					<p className='text-[10px] sm:text-[11px] text-neutralDark/60'>{data.date}</p>
				</div>
			</div>
			<p className='text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-5'>"{data.testimonial}"</p>
		</div>
	)
}

export default function TestimonialCarousel() {
	const [leftIndex, setLeftIndex] = useState(0)
	const [rightIndex, setRightIndex] = useState(1)
	const [animating, setAnimating] = useState(false)
	const [direction, setDirection] = useState(null) // 'next' | 'prev'
	const [incomingIndex, setIncomingIndex] = useState(null)
	const [paused, setPaused] = useState(false)
	const timeoutRef = useRef(null)
	const cardRefs = useRef({})

	const total = testimonials.length

	const goNext = useCallback(() => {
		if (animating) return
		setDirection('next')
		const nextIncoming = (rightIndex + 1) % total
		setIncomingIndex(nextIncoming)
		setAnimating(true)
	}, [animating, rightIndex, total])

	const goPrev = useCallback(() => {
		if (animating) return
		setDirection('prev')
		const prevIncoming = (leftIndex - 1 + total) % total
		setIncomingIndex(prevIncoming)
		setAnimating(true)
	}, [animating, leftIndex, total])

	useEffect(() => {
		if (animating) {
			timeoutRef.current = setTimeout(() => {
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
		}
		return () => clearTimeout(timeoutRef.current)
	}, [animating, direction, incomingIndex, leftIndex, rightIndex])

	// Autoplay mechanism: schedule next slide after a quiet period
	useEffect(() => {
		if (paused) return
		if (animating) return // wait until animation done
		const id = setTimeout(() => {
			goNext()
		}, AUTO_INTERVAL)
		return () => clearTimeout(id)
	}, [leftIndex, rightIndex, animating, paused, goNext])

	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1280) // xl breakpoint (1280px)
		}
		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const rendered = useMemo(() => {
		// Mobile to Large (< 1280px): show only center card
		if (isMobile) {
			if (!animating) {
				return [{ key: 'center-' + leftIndex, index: leftIndex, state: 'center' }]
			}
			if (direction === 'next') {
				return [
					{ key: 'exit-' + leftIndex, index: leftIndex, state: 'exit-left' },
					{ key: 'enter-' + rightIndex, index: rightIndex, state: 'enter-right' }
				]
			}
			if (direction === 'prev') {
				return [
					{ key: 'exit-' + leftIndex, index: leftIndex, state: 'exit-right' },
					{ key: 'enter-' + incomingIndex, index: incomingIndex, state: 'enter-left' }
				]
			}
		}
		// XL and above (>= 1280px): show two cards
		if (!animating) {
			return [
				{ key: 'left-' + leftIndex, index: leftIndex, state: 'left' },
				{ key: 'right-' + rightIndex, index: rightIndex, state: 'right' }
			]
		}
		if (direction === 'next') {
			return [
				{ key: 'exit-' + leftIndex, index: leftIndex, state: 'exit-left' },
				{ key: 'shift-' + rightIndex, index: rightIndex, state: 'to-left' },
				{ key: 'enter-' + incomingIndex, index: incomingIndex, state: 'enter-right' }
			]
		}
		if (direction === 'prev') {
			return [
				{ key: 'exit-' + rightIndex, index: rightIndex, state: 'exit-right' },
				{ key: 'shift-' + leftIndex, index: leftIndex, state: 'to-right' },
				{ key: 'enter-' + incomingIndex, index: incomingIndex, state: 'enter-left' }
			]
		}
		return []
	}, [animating, direction, incomingIndex, leftIndex, rightIndex, isMobile])

	const endTransform = (state) => {
		if (isMobile) {
			// Single card mode (mobile to large < 1280px): centered
			switch (state) {
				case 'center': return 'translateX(0)'
				case 'exit-left': return 'translateX(-100%)'
				case 'exit-right': return 'translateX(100%)'
				case 'enter-right': return 'translateX(0)'
				case 'enter-left': return 'translateX(0)'
				default: return 'translateX(0)'
			}
		}
		// Two cards mode (XL >= 1280px): side by side with spacing
		// Use percentage-based positioning for better responsiveness
		switch (state) {
			case 'left': return 'translateX(-52%)' // Card positioned to the left
			case 'right': return 'translateX(52%)' // Card positioned to the right
			case 'to-left': return 'translateX(-52%)'
			case 'to-right': return 'translateX(52%)'
			case 'exit-left': return 'translateX(-150%)'
			case 'exit-right': return 'translateX(150%)'
			case 'enter-right': return 'translateX(52%)'
			case 'enter-left': return 'translateX(-52%)'
			default: return 'translateX(0)'
		}
	}

	const startTransform = (state) => {
		if (isMobile) {
			// Single card transforms
			switch (state) {
				case 'center': return 'translateX(0)'
				case 'exit-left': return 'translateX(0)'
				case 'exit-right': return 'translateX(0)'
				case 'enter-right': return 'translateX(100%)'
				case 'enter-left': return 'translateX(-100%)'
				default: return 'translateX(0)'
			}
		}
		// Two cards transforms
		switch (state) {
			case 'left': return endTransform('left')
			case 'right': return endTransform('right')
			case 'to-left': return endTransform('right')
			case 'to-right': return endTransform('left')
			case 'exit-left': return endTransform('left')
			case 'exit-right': return endTransform('right')
			case 'enter-right': return 'translateX(150%)'
			case 'enter-left': return 'translateX(-150%)'
			default: return 'translateX(0)'
		}
	}

	// Kick off transitions after initial paint
		useEffect(() => {
			if (animating) {
				requestAnimationFrame(() => {
					requestAnimationFrame(() => { // double rAF to ensure initial style committed
						Object.values(cardRefs.current).forEach(el => {
							if (!el) return
							const state = el.dataset.state
							el.style.transform = endTransform(state)
						})
					})
				})
			}
		}, [animating])

	// Jump navigation (optional): if user clicks indicator far away, we step sequentially.
	const jumpTo = useCallback((targetLeft) => {
		if (targetLeft === leftIndex || animating) return
		// compute shortest direction distance
		let forwardSteps = (targetLeft - leftIndex + total) % total
		let backwardSteps = (leftIndex - targetLeft + total) % total
		const useNext = forwardSteps <= backwardSteps
		const steps = useNext ? forwardSteps : backwardSteps
		if (steps === 0) return
		let count = 0
		const step = () => {
			if (count >= steps) return
			if (useNext) {
				goNext()
			} else {
				goPrev()
			}
			count++
			// chain next step after current animation completes
			setTimeout(() => {
				if (count < steps) step()
			}, DURATION + 30)
		}
		step()
	}, [leftIndex, animating, total, goNext, goPrev])

	return (
		<div className='flex flex-col items-center gap-4 sm:gap-6 w-full'
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div className='flex items-center gap-3 sm:gap-6 md:gap-8 w-full justify-center'>
				<button aria-label='Previous testimonials' onClick={goPrev} disabled={animating} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-1 border-primary text-primary hover:bg-primary hover:text-secondary transition disabled:opacity-40 flex-shrink-0'>
					<svg className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
						<path d='M15 18l-6-6 6-6' strokeLinecap='round' strokeLinejoin='round'/>
					</svg>
				</button>
				<div className={`relative overflow-hidden flex items-center justify-center ${
					isMobile 
						? 'w-full max-w-[calc(100vw-120px)] sm:max-w-[500px] h-[220px] sm:h-[240px]' 
						: 'w-full max-w-[95%] xl:max-w-[1100px] 2xl:max-w-[1200px] h-[280px]'
				}`}>
					{rendered.map(item => (
						<div
							key={item.key}
							data-state={item.state}
							ref={el => { cardRefs.current[item.key] = el }}
							className='absolute will-change-transform flex justify-center'
							style={{ 
								transform: startTransform(item.state),
								transition: `transform ${DURATION}ms cubic-bezier(0.25,0.8,0.3,1)`,
								width: isMobile ? '100%' : '50%'
							}}
						>
							<TestimonialCard data={testimonials[item.index]} isDualMode={!isMobile} />
						</div>
					))}
				</div>
				<button aria-label='Next testimonials' onClick={goNext} disabled={animating} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-1 border-primary text-primary hover:bg-primary hover:text-secondary transition disabled:opacity-40 flex-shrink-0'>
					<svg className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
						<path d='M9 6l6 6-6 6' strokeLinecap='round' strokeLinejoin='round'/>
					</svg>
				</button>
			</div>
			{/* Indicators */}
			{(() => {
				// Active index should reflect destination immediately (no delay)
				const activeLeft = animating ? (direction === 'next' ? rightIndex : (direction === 'prev' ? incomingIndex : leftIndex)) : leftIndex
				return (
					<div className='flex items-center gap-1.5 sm:gap-2 select-none'>
						{Array.from({ length: total }).map((_, i) => {
							const active = i === activeLeft
							return (
								<button
									key={i}
									onClick={() => jumpTo(i)}
									disabled={animating}
									aria-label={`Tampilkan testimoni mulai dari item ${i+1}`}
									className={`transition-all duration-300 ease-out disabled:cursor-not-allowed ${active ? 'bg-primary h-[5px] sm:h-[6px] w-6 sm:w-8 rounded-full' : 'bg-primary/35 hover:bg-primary/70 h-[5px] sm:h-[6px] w-[5px] sm:w-[6px] rounded-full'}`}
								/>
							)
						})}
					</div>
				)
			})()}
		</div>
	)
}

