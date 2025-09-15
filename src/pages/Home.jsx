import Navbar from '../components/Home/Navbar'
import Section from '../components/Home/Section'

function Hero() {
  return (
    <section className="h-screen flex flex-col" id='about'>

      <Navbar />

      <div className="flex-1 py-5">
        <Section />

      </div>
    </section>
  )
}

export default Hero
