import Hero from '../sections/Hero'
import Works from '../sections/Works'
import Studio from '../sections/Studio'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <main>
        <Hero />
        <Works />
        <Studio />
      </main>
      <Contact />
    </div>
  )
}
