import { useState } from 'react'
import Subscription from './components/Subscription'
import './styles/theme.css'
import './styles/app.css'

export default function App() {
  const [lang, setLang] = useState('bg')

  const handleSubscribe = async (provider, plan, billing) => {
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider, plan, billing })
      })

      const data = await res.json()
      console.log('Subscription response:', data)
    } catch (err) {
      console.error('Subscription error:', err)
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">FitForFun</h1>
        <p className="app-subtitle">
          {lang === 'bg'
            ? 'Твоят спокоен, красив и здравословен хранителен помощник'
            : 'Your calm, beautiful and healthy nutrition companion'}
        </p>

        <div className="lang-switch">
          <button
            className={lang === 'bg' ? 'active' : ''}
            onClick={() => setLang('bg')}
          >
            BG
          </button>
          <button
            className={lang === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </header>

      <main className="app-main">
        <section className="intro-card">
          <h2>
            {lang === 'bg'
              ? 'Персонални менюта, рецепти и насоки'
              : 'Personal menus, recipes and guidance'}
          </h2>
          <p>
            {lang === 'bg'
              ? 'Създадено да бъде леко, приятно и отморяващо.'
              : 'Designed to feel light, pleasant and relaxing.'}
          </p>
        </section>

        <Subscription lang={lang} onSubscribe={handleSubscribe} />
      </main>

      <footer className="app-footer">
        <p>© 2026 FitForFun</p>
      </footer>
    </div>
  )
}
