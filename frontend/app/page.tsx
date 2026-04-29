import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { PracticalInfo } from '@/components/practical-info'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <Services />
      <Testimonials />
      <PracticalInfo />
      <ContactSection />
      <Footer />
    </main>
  )
}
