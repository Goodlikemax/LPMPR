import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import {Shipping} from "./components/shipping";
import {Guarantee} from "./components/guarantee";
import { Gallery } from './components/gallery'
import {InfoBlock1} from "./components/infoBlock1";
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import {Footer} from "./components/footer";
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Shipping data={landingPageData.Shipping} />
      <Guarantee data={landingPageData.Guarantee} />
        {/*<InfoBlock1 data={landingPageData.InfoBlock1} />*/}
      {/*<Services data={landingPageData.Services} />*/}
      {/*<Testimonials data={landingPageData.Testimonials} />*/}
      {/*<Team data={landingPageData.Team} />*/}
      <Contact data={landingPageData.Contact} />
      <Footer data={landingPageData.Footer} />
    </div>
  )
}

export default App
