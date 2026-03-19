import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import AnnTest from './components/AnnTest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Comment example in React JAX */}
    {/* <App /> */}
    <AnnTest />
  </StrictMode>,
)
