import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './pages/Homepage.jsx'
import PortfolioPage from "./pages/PortfolioPage.jsx"
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {path: "/", Component: Homepage},
  {path: "/portfolio", Component: PortfolioPage}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
