import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CONTENT } from '../assets'

const testimonials = CONTENT.testimonials.testimonialCards
const DURATION = 400 // ms animation length
const AUTO_INTERVAL = 5000 // ms between automatic slides (sweet spot ~6s for reading)

const cardBase = 'w-[500px] h-[220px] bg-secondary border-1 border-primary rounded-xl p-6 flex flex-col gap-3 text-primary shadow-sm'

function TestimonialCard({ data }) {
	if (!data) return null
	return (
		<div className={cardBase}>
			<div className='flex items-center gap-3'>
				<div className='w-10 h-10 rounded-full overflow-hidden shrink-0'>
					<img src={data.profileImage} alt={data.name} className='object-cover w-full h-full'/>
				</div>
				<div className='flex flex-col'>
					<p className='text-primary text-sm font-semibold'>{data.name} | {data.position}</p>
					<p className='text-[11px] text-neutralDark/60'>{data.date}</p>
				</div>
			</div>
			<p className='text-sm leading-relaxed line-clamp-5'>"{data.testimonial}"</p>
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

	const rendered = useMemo(() => {
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
	}, [animating, direction, incomingIndex, leftIndex, rightIndex])

	const endTransform = (state) => {
		switch (state) {
			case 'left': return 'translateX(-280px)' // center alignment adjustment
			case 'right': return 'translateX(280px)'
			case 'to-left': return 'translateX(-280px)'
			case 'to-right': return 'translateX(280px)'
			case 'exit-left': return 'translateX(-840px)'
			case 'exit-right': return 'translateX(840px)'
			case 'enter-right': return 'translateX(280px)'
			case 'enter-left': return 'translateX(-280px)'
			default: return 'translateX(0)'
		}
	}

	const startTransform = (state) => {
		switch (state) {
			case 'left': return endTransform('left')
			case 'right': return endTransform('right')
			case 'to-left': return endTransform('right') // start at previous right
			case 'to-right': return endTransform('left') // start at previous left
			case 'exit-left': return endTransform('left')
			case 'exit-right': return endTransform('right')
			case 'enter-right': return 'translateX(840px)'
			case 'enter-left': return 'translateX(-840px)'
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
		<div className='flex flex-col items-center gap-6'
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div className='flex items-center gap-8'>
				<button aria-label='Previous testimonials' onClick={goPrev} disabled={animating} className='cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border-1 border-primary text-primary hover:bg-primary hover:text-secondary transition disabled:opacity-40'>
					<svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
						<path d='M15 18l-6-6 6-6' strokeLinecap='round' strokeLinejoin='round'/>
					</svg>
				</button>
				<div className='relative w-[1120px] h-[260px] overflow-hidden flex items-center justify-center'>
					{rendered.map(item => (
						<div
							key={item.key}
							data-state={item.state}
							ref={el => { cardRefs.current[item.key] = el }}
							className='absolute will-change-transform'
							style={{ 
								transform: startTransform(item.state),
								transition: `transform ${DURATION}ms cubic-bezier(0.25,0.8,0.3,1)`
							}}
						>
							<TestimonialCard data={testimonials[item.index]} />
						</div>
					))}
				</div>
				<button aria-label='Next testimonials' onClick={goNext} disabled={animating} className='cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border-1 border-primary text-primary hover:bg-primary hover:text-secondary transition disabled:opacity-40'>
					<svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
						<path d='M9 6l6 6-6 6' strokeLinecap='round' strokeLinejoin='round'/>
					</svg>
				</button>
			</div>
			{/* Indicators */}
			{(() => {
				// Active index should reflect destination immediately (no delay)
				const activeLeft = animating ? (direction === 'next' ? rightIndex : (direction === 'prev' ? incomingIndex : leftIndex)) : leftIndex
				return (
					<div className='flex items-center gap-2 select-none'>
						{Array.from({ length: total }).map((_, i) => {
							const active = i === activeLeft
							return (
								<button
									key={i}
									onClick={() => jumpTo(i)}
									disabled={animating}
									aria-label={`Tampilkan testimoni mulai dari item ${i+1}`}
									className={`transition-all duration-300 ease-out disabled:cursor-not-allowed ${active ? 'bg-primary h-[6px] w-8 rounded-full' : 'bg-primary/35 hover:bg-primary/70 h-[6px] w-[6px] rounded-full'}`}
								/>
							)
						})}
					</div>
				)
			})()}
		</div>
	)
}

