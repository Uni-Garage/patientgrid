import Header from './components/Header'
import Hero from './components/divisions/Hero'
import Division1 from './components/divisions/D1'
import Division2 from './components/divisions/D2'
import Division3 from './components/divisions/D3'
import Division4 from './components/divisions/D4'
import Division5 from './components/divisions/D5'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Division1 />
      <Division2 />
      <Division3 />
      <Division4 />
      <Division5 />
      <Footer />
    </main>
  )
}

