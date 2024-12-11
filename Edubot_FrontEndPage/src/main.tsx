import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import InternshipsAndTrainingRoute from './Pages/InternshipsAndTrainings/InternshipsAndTrainingRoute/InternshipsAndTrainingRoute.tsx'
// import HomePageRoute from './Pages/HomePage/HomePageRoute/HomePageRoute.tsx'
import IncubationCenterRoute from './Pages/IncubationCenters/IncubationCenterRoute/IncubationCenterRoute.tsx'
import HomePageRoute from './Pages/HomePage/HomePageRoute/HomePageRoute.tsx'
import SkillOrientedCourses from './Pages/SkillOrientedCourses/SkillOrientedCourses/SkillOrientedCourses.tsx'
import AboutUsPageRoute from './Pages/AboutUsPage/AboutUsPageRoute/AboutUsPageRoute.tsx'
// import SkillOrientedCourses from './Pages/SkillOrientedCourses/SkillOrientedCourses.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/internshipsandtrainings',
        element: <InternshipsAndTrainingRoute />,
      },
      {
        path: '/',
        element: <HomePageRoute />,
      },
      {
        path: '/IncubationCenter',
        element: <IncubationCenterRoute/>
      },
      {
        path: '/SkillOrientedCourses',
        element: <SkillOrientedCourses/>
      },
      // here i want about us route
      {
        path:'/aboutus',
        element: <AboutUsPageRoute/>
      }
        
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
