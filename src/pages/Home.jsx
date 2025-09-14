import Navbar from '../components/Navbar'
import Section from '../components/Section'

function Hero() {
  return (
    <section className="h-screen flex flex-col" id='home'>
      <div className="h-[10%]">
        <Navbar />
      </div>

      <div className="flex-1">
        <Section />
      </div>

      
    </section>
  )
}

export default Hero
