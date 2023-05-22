import NavBar from "./components/navbar/"
import Footer from "./components/footer/"
import Carousel from "./components/carousel/"
import WebRadio from "./components/Radio"
import {SplitON} from "./components/Splide/"
import {SplitTWO} from "./components/Splide/"
import {SplitTree} from "./components/Splide/"
import '../src/styles/global.scss'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Carousel/>
      <WebRadio />
      {SplitON()}
      {SplitTWO()}
      {SplitTree()}
      <Footer/>   
      </div>
  )
}

export default App
