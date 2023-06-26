import {useState, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Swiper as SwiperType} from 'swiper/types'
import {FreeMode, Navigation} from 'swiper'
import {Container, Wrap, Item, Subtitle, Text, Navigate, Button} from './style'

interface Fact {
  id: number
  year: number
  description: string
}

type Facts = Fact[]

interface EventProps {
  facts: Facts
}

const enum PositionTypes {
  beginning = 'beginning',
  edge = 'edge',
  end = 'end',
}

const Event = ({facts}: EventProps) => {
  const [position, setPosition] = useState<PositionTypes>(
    PositionTypes.beginning
  )
  const swiperRef = useRef<SwiperType>()
  const compRef = useRef<HTMLDivElement | null>(null)
  const handleClickLeftButton = () => swiperRef.current?.slidePrev()
  const handleClickRightButton = () => swiperRef.current?.slideNext()

  return (
    <Container ref={compRef}>
      <Wrap>
        <Swiper
          grabCursor
          freeMode
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 35,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
          modules={[FreeMode, Navigation]}
          touchEventsTarget="container"
          onBeforeInit={swiper => (swiperRef.current = swiper)}
          onReachBeginning={() => setPosition(PositionTypes.beginning)}
          onFromEdge={() => setPosition(PositionTypes.edge)}
          onReachEnd={() => setPosition(PositionTypes.end)}
        >
          {facts.map(fact => (
            <SwiperSlide key={fact.id}>
              <Item>
                <Subtitle>{fact.year}</Subtitle>
                <Text>{fact.description}</Text>
              </Item>
            </SwiperSlide>
          ))}
        </Swiper>
        <Navigate>
          <Button
            style={{
              opacity: position === PositionTypes.beginning ? 0 : 1,
              visibility:
                position === PositionTypes.beginning ? 'hidden' : 'visible',
            }}
            onClick={handleClickLeftButton}
          >
            <svg>
              <g transform="matrix(-1 0 0 -1 8 12)">
                <path d="M1 1L6 6L1 11" />
              </g>
            </svg>
          </Button>
          <Button
            onClick={handleClickRightButton}
            style={{
              opacity: position === PositionTypes.end ? 0 : 1,
              visibility: position === PositionTypes.end ? 'hidden' : 'visible',
            }}
          >
            <svg>
              <g>
                <path d="M1 1L6 6L1 11" />
              </g>
            </svg>
          </Button>
        </Navigate>
      </Wrap>
    </Container>
  )
}

export default Event
