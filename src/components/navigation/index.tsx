import useDatesContext from '../../hooks/use-data'
import formatNumber from '../../utils'
import {Container, Wrap, Button} from './style'

const Navigation = () => {
  const {currentPeriod, dates, swiper} = useDatesContext()

  return (
    <Container>
      {dates && (
        <>
          {`${formatNumber(currentPeriod + 1)}/${formatNumber(dates.length)}`}
        </>
      )}

      <Wrap>
        <Button
          disabled={!dates || currentPeriod === 0}
          onClick={() => swiper?.slidePrev()}
        >
          <svg>
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" />
          </svg>
        </Button>
        <Button
          disabled={!dates || currentPeriod === dates.length - 1}
          onClick={() => swiper?.slideNext()}
        >
          <svg>
            <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" />
          </svg>
        </Button>
      </Wrap>
    </Container>
  )
}

export default Navigation
