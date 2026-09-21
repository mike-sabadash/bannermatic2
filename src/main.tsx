import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { PreferencesProvider } from './lib/preferences.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreferencesProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PreferencesProvider>
  </StrictMode>,
)
