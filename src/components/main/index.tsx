import {useEffect} from 'react'
import useMobile from '../../hooks/use-mobile'
import useData from '../../hooks/use-data'
import Year from '../year'
import Circle from '../circle'
import Navigation from '../navigation'
import Slider from '../slider'
import Pagination from '../pagination'
import DATA from '../../mock-data'
import {Container, Wrapper, Wrap, Title} from './style'

const Main = () => {
  const {setDates, setCurrentPeriod, currentPeriod} = useData()
  const {isMobile} = useMobile()

  useEffect(() => {
    setDates(DATA)
    setCurrentPeriod(0)
  }, [setDates, setCurrentPeriod])

  return (
    <Container>
      <Wrapper>
        <Title>Исторические даты</Title>
        <Wrap>
          <Year number={DATA[currentPeriod].years[0]} place="first" />
          <Year number={DATA[currentPeriod].years[1]} place="second" />
        </Wrap>
        {!isMobile && (
          <>
            <Circle />
            <Navigation />
          </>
        )}
      </Wrapper>
      <Slider />
      {isMobile && (
        <>
          <Navigation />
          <Pagination />
        </>
      )}
    </Container>
  )
}

export default Main
