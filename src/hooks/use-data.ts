import {useContext} from 'react'
import {DatesContext} from '../context'

const useData = () => {
  const datesContext = useContext(DatesContext)

  if (!datesContext)
    throw new Error('You need to use datesContext context inside provider')

  const increasePeriod = () => {
    const {currentPeriod, setCurrentPeriod} = datesContext

    setCurrentPeriod(currentPeriod - 1)
  }

  const decreasePeriod = () => {
    const {currentPeriod, setCurrentPeriod} = datesContext

    setCurrentPeriod(currentPeriod + 1)
  }

  return {...datesContext, increasePeriod, decreasePeriod}
}

export default useData
