import {useRef, useLayoutEffect} from 'react'
import {gsap} from 'gsap'
import useDatesContext from '../../hooks/use-data'
import {
  disappearAnimation,
  dotClosureAnimation,
  dotOpeningAnimation,
  rotateClockwiseAnimation,
  spawnAnimation,
} from './animation'

interface PointProps {
  category: string
  isActive?: boolean
  i: number
}

import {Button, Category} from './style'

const Point = ({category, isActive, i}: PointProps) => {
  const {
    currentPeriod,
    isEndAnimationAvailable,
    isSlideTransitionComplete,
    swiper,
  } = useDatesContext()

  const dotRef = useRef<HTMLButtonElement | null>(null)
  const spanRef = useRef<HTMLSpanElement | null>(null)

  const ctx = useRef<gsap.Context | null>(null)

  const onEnter = () => {
    if (!isActive) {
      dotOpeningAnimation({ctx, ref: dotRef})
    }
  }

  const onLeave = () => {
    if (!isActive) {
      dotClosureAnimation({ctx, ref: dotRef})
    }
  }

  const onClick = () => {
    if (!isActive) {
      swiper?.slideTo(i)
    }
  }

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {}, dotRef)

    return () => ctx.current?.revert()
  }, [])

  useLayoutEffect(() => {
    rotateClockwiseAnimation({ctx, ref: dotRef, currentPeriod})

    if (isActive) {
      dotOpeningAnimation({ctx, ref: dotRef})
    } else {
      dotClosureAnimation({ctx, ref: dotRef})
    }
  }, [currentPeriod, isActive])

  useLayoutEffect(() => {
    ctx.current?.add(() => {
      if (isEndAnimationAvailable && isSlideTransitionComplete) {
        spawnAnimation({ctx, ref: spanRef, isActive})
      } else {
        disappearAnimation({ctx, ref: spanRef})
      }
    })
  }, [isSlideTransitionComplete, isEndAnimationAvailable, isActive])

  return (
    <Button
      ref={dotRef}
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {i + 1}
      <Category ref={spanRef}>{category}</Category>
    </Button>
  )
}

Point.defaultProps = {
  isActive: false,
}

export default Point
