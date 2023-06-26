import React from 'react'
import {gsap} from 'gsap'

interface NumberAnimationProps {
  ctx: React.MutableRefObject<gsap.Context | null>
  ref: React.MutableRefObject<HTMLDivElement | null>
  number: number
}

const numberAnimation = ({ctx, ref, number}: NumberAnimationProps) => {
  ctx.current?.add(() => {
    gsap.to(ref.current, {
      duration: 1,
      innerHTML: number,
      roundProps: 'innerHTML',
    })
  })
}

export {numberAnimation}
