import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import DiarioApp from './DiarioApp.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <DiarioApp />
      </BrowserRouter>
  </React.StrictMode>,
)
