import React, {useLayoutEffect, useRef, useState} from 'react'
import {gsap} from 'gsap'
import {numberAnimation} from './animation'
import Container from './style'

interface YearProps {
  number: number
  place: string
}

const Year = ({number, place}: YearProps) => {
  const [initValue] = useState(number)
  const numberRef = useRef<HTMLDivElement | null>(null)
  const ctx = useRef<gsap.Context | null>(null)

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {})

    return () => ctx.current?.revert()
  }, [])

  useLayoutEffect(() => {
    numberAnimation({ctx, ref: numberRef, number})
  }, [number])

  return (
    <Container ref={numberRef} place={place}>
      {initValue}
    </Container>
  )
}

export default Year
