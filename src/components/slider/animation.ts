import React from 'react'
import {gsap} from 'gsap'

interface SpawnAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>
  ref: React.MutableRefObject<HTMLDivElement | null>
}

interface DisappearAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>
  ref: React.MutableRefObject<HTMLDivElement | null>
}

const spawnAnimation = ({ctx, ref}: SpawnAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, {opacity: 1, duration: 0.4})
  })
}

const disappearAnimation = ({ctx, ref}: DisappearAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, {opacity: 0, duration: 0.3})
  })
}

export {spawnAnimation, disappearAnimation}
