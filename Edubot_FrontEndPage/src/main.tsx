import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import InternshipsAndTrainingRoute from './Pages/InternshipsAndTrainings/InternshipsAndTrainingRoute/InternshipsAndTrainingRoute.tsx'
// import HomePageRoute from './Pages/HomePage/HomePageRoute/HomePageRoute.tsx'
import IncubationCenterRoute from './Pages/IncubationCenters/IncubationCenterRoute/IncubationCenterRoute.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'internshipsandtrainings',
        element: <InternshipsAndTrainingRoute />,
      },
      {
        path: '/',
        element: <IncubationCenterRoute />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
