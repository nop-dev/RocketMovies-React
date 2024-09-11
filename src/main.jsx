import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'

// import { Home } from './pages/Home'
// import { Profile } from './pages/Profile'
// import { SignIn } from './pages/SignIn'
// import { SignUp } from './pages/SignUp'
// import { MoviePreview } from './pages/MoviePreview'
import { CreateNote } from './pages/CreateNote'

// import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <GlobalStyles />
          <CreateNote />
    </React.StrictMode>,
  )