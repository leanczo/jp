import { useState, useEffect } from 'react'
import { Moon, Sun, PartyPopper } from 'lucide-react'
import Tareas from './components/Tareas'
import Compras from './components/Compras'
import Cronograma from './components/Cronograma'
import Recomendaciones from './components/Recomendaciones'
import Resumen from './components/Resumen'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('jp-dark-mode')
    return saved ? JSON.parse(saved) : false
  })
  const [activeTab, setActiveTab] = useState('resumen')

  useEffect(() => {
    localStorage.setItem('jp-dark-mode', JSON.stringify(darkMode))
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const tabs = [
    { id: 'resumen', label: 'Resumen', icon: '📊' },
    { id: 'tareas', label: 'Pendientes', icon: '📋' },
    { id: 'compras', label: 'Compras', icon: '🛒' },
    { id: 'cronograma', label: 'Horarios', icon: '⏰' },
    { id: 'recomendaciones', label: 'Tips', icon: '💡' },
  ]

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header className="app-header">
        <div className="header-content">
          <div className="header-title">
            <PartyPopper size={26} />
            <div>
              <h1>Fiesta 18 - Juan Pablo</h1>
              <span className="header-subtitle">Organizador de evento</span>
            </div>
          </div>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Cambiar tema"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <nav className="tab-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      <main className="app-main">
        {activeTab === 'resumen' && <Resumen />}
        {activeTab === 'tareas' && <Tareas />}
        {activeTab === 'compras' && <Compras />}
        {activeTab === 'cronograma' && <Cronograma />}
        {activeTab === 'recomendaciones' && <Recomendaciones />}
      </main>
    </div>
  )
}

export default App
