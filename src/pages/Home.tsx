import useScrollReveal from '../hooks/useScrollReveal'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About'
import Services from '../components/Services'
import Footer from '../components/Footer'

export default function Home() {
    useScrollReveal()

    return (
        <main className="min-h-screen overflow-hidden bg-white">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Footer />
        </main>
    )
}
