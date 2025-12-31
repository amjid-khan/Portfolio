import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'; // ya App.css jahan tailwind import hai

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
