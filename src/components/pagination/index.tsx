import useDatesContext from '../../hooks/use-data'
import {List, Item, Button} from './style'

const Pagination = () => {
  const {dates, currentPeriod, swiper} = useDatesContext()

  return (
    <List>
      {dates?.map((date, index) => (
        <Item key={date.id}>
          <Button
            type="button"
            style={{
              backgroundColor:
                currentPeriod === index
                  ? 'var(--black-blue)'
                  : 'var(--black-blue-4)',
            }}
            onClick={() => swiper?.slideTo(index)}
          >
            {}
          </Button>
        </Item>
      ))}
    </List>
  )
}

export default Pagination
