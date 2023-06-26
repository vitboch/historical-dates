import React, {
  createContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
} from 'react'
import {Swiper as SwiperType} from 'swiper/types'

interface Fact {
  id: number
  year: number
  description: string
}

interface HistoricalDate {
  id: number
  years: Array<number>
  category: string
  facts: Facts
}

type Facts = Fact[]
type HistoricalDates = HistoricalDate[]

export const DatesContext = createContext<DatesContextType | null>(null)

interface DatesContextProps {
  children: ReactNode
}

interface DatesContextType {
  dates: HistoricalDates | null
  currentPeriod: number
  swiper: SwiperType | null
  isSlideTransitionComplete: boolean
  isEndAnimationAvailable: boolean
  setDates: Dispatch<React.SetStateAction<HistoricalDates | null>>
  setCurrentPeriod: Dispatch<React.SetStateAction<number>>
  setSwiper: Dispatch<React.SetStateAction<SwiperType | null>>
  setIsSlideTransitionComplete: Dispatch<React.SetStateAction<boolean>>
  setIsEndAnimationAvailable: Dispatch<React.SetStateAction<boolean>>
}

const DatesContextProvider = ({children}: DatesContextProps) => {
  const [dates, setDates] = useState<HistoricalDates | null>(null)
  const [currentPeriod, setCurrentPeriod] = useState(0)
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [isSlideTransitionComplete, setIsSlideTransitionComplete] =
    useState<boolean>(true)
  const [isEndAnimationAvailable, setIsEndAnimationAvailable] =
    useState<boolean>(true)
  const value = useMemo(
    () => ({
      dates,
      currentPeriod,
      swiper,
      isSlideTransitionComplete,
      isEndAnimationAvailable,
      setDates,
      setCurrentPeriod,
      setSwiper,
      setIsSlideTransitionComplete,
      setIsEndAnimationAvailable,
    }),
    [
      dates,
      currentPeriod,
      swiper,
      isSlideTransitionComplete,
      isEndAnimationAvailable,
    ]
  )

  return <DatesContext.Provider value={value}>{children}</DatesContext.Provider>
}

export default DatesContextProvider
