import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Homepage from './pages/Homepage.jsx'
import PortfolioPage from "./pages/PortfolioPage.jsx"
import PortfolioDetailPage from './pages/PortfolioDetailPage.jsx'

const router = createBrowserRouter([
  {path: "/", Component: Homepage},
  {path: "/portfolio", Component: PortfolioPage},
  {path: "/portfolio/:id", Component: PortfolioDetailPage}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
