import {useRef, useLayoutEffect} from 'react'
import useData from '../../hooks/use-data'
import Event from '../event'
import {gsap} from 'gsap'
import {Navigation, EffectFade} from 'swiper'
import {Swiper as SwiperType} from 'swiper/types'
import {SwiperSlide, Swiper} from 'swiper/react'
import {disappearAnimation, spawnAnimation} from './animation'
import {Section} from './style'

const Slider = () => {
  const {
    dates,
    currentPeriod,
    isSlideTransitionComplete,
    isEndAnimationAvailable,
    setCurrentPeriod,
    setSwiper,
    setIsEndAnimationAvailable,
    setIsSlideTransitionComplete,
  } = useData()

  const swiperRef = useRef<SwiperType | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const ctx = useRef<gsap.Context | null>(null)

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {})

    return () => ctx.current?.revert()
  }, [])

  useLayoutEffect(() => {
    setIsEndAnimationAvailable(false)
    const timer = setTimeout(() => {
      setIsEndAnimationAvailable(true)
    }, 300)

    if (swiperRef.current) disappearAnimation({ctx, ref: containerRef})

    return () => clearTimeout(timer)
  }, [currentPeriod, setIsEndAnimationAvailable])

  useLayoutEffect(() => {
    if (
      swiperRef.current &&
      isSlideTransitionComplete &&
      isEndAnimationAvailable
    ) {
      spawnAnimation({ctx, ref: containerRef})
    }
  }, [isSlideTransitionComplete, isEndAnimationAvailable])

  return (
    <Section ref={containerRef}>
      {dates && (
        <Swiper
          effect="fade"
          fadeEffect={{crossFade: true}}
          modules={[EffectFade, Navigation]}
          speed={600}
          onSwiper={swiperInst => setSwiper(swiperInst)}
          onSlideChange={swiper => setCurrentPeriod(swiper.activeIndex)}
          onBeforeInit={swiper => (swiperRef.current = swiper)}
          onSlideChangeTransitionStart={() =>
            setIsSlideTransitionComplete(false)
          }
          onSlideChangeTransitionEnd={() => setIsSlideTransitionComplete(true)}
          allowTouchMove={false}
        >
          {dates.map(date => (
            <SwiperSlide key={date.id}>
              <Event facts={date.facts} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Section>
  )
}

export default Slider
