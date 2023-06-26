import DatesContextProvider from '../context'
import Main from '../components/main'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import GlobalStyle from './style'

const App = () => {
  return (
    <DatesContextProvider>
      <Main />
      <GlobalStyle />
    </DatesContextProvider>
  )
}

export default App
