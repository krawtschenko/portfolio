import { Contact } from '@/components/contact/Contact'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { Home } from '@/components/home/Home'
import { Portfolio } from '@/components/portfolio/Portfolio'
import { Resume } from '@/components/resume/Resume'
import { Skills } from '@/components/skills/Skills'

import './App.scss'
import '@/styles/reusable.scss'

export const App = () => {
  return (
    <main className={'main'}>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}
