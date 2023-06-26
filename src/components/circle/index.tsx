import React, {useLayoutEffect, useRef} from 'react'
import useData from '../../hooks/use-data'
import Point from '../point'
import {gsap} from 'gsap'
import HISTORICAL_DATES from '../../mock-data'
import {Container, Wrap, List} from './style'

interface rotationAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>
  ref: React.MutableRefObject<HTMLUListElement | null>
  currentPeriod: number
}

const Circle = () => {
  const {currentPeriod} = useData()
  const circleRef = useRef<HTMLUListElement | null>(null)
  const ctx = useRef<gsap.Context | null>(null)

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {})

    return () => ctx.current?.revert()
  }, [])

  const rotationAnimation = ({
    ctx,
    ref,
    currentPeriod,
  }: rotationAnimationProps) => {
    ctx.current?.add(() => {
      gsap.to(ref.current, {
        duration: 1,
        rotate: (-360 / 6) * currentPeriod,
        transformOrigin: 'center',
      })
    })
  }

  useLayoutEffect(() => {
    rotationAnimation({ctx, ref: circleRef, currentPeriod})
  }, [currentPeriod])

  return (
    <Container>
      <Wrap>
        <List ref={circleRef}>
          {HISTORICAL_DATES.map((date, i) => (
            <Point
              key={date.id}
              i={i}
              isActive={currentPeriod === i}
              category={date.category}
            />
          ))}
        </List>
      </Wrap>
    </Container>
  )
}

export default Circle
