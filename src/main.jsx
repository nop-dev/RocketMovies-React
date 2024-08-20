import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'

import { Home } from './pages/Home'

// import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <GlobalStyles />
          <Home />
    </React.StrictMode>,
  )