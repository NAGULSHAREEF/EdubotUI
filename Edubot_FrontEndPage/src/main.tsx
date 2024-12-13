import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import InternshipsAndTrainingRoute from './Pages/InternshipsAndTrainings/InternshipsAndTrainingRoute/InternshipsAndTrainingRoute.tsx'
// import HomePageRoute from './Pages/HomePage/HomePageRoute/HomePageRoute.tsx'
import IncubationCenterRoute from './Pages/IncubationCenters/IncubationCenterRoute/IncubationCenterRoute.tsx'
import GetInTouch from './Pages/ContactUsPage/GetInTouch.tsx'; 
import HomePageRoute from './Pages/HomePage/HomePageRoute/HomePageRoute.tsx'
import SkillOrientedCourses from './Pages/SkillOrientedCourses/SkillOrientedCourses/SkillOrientedCourses.tsx'
import AboutUsPageRoute from './Pages/AboutUsPage/AboutUsPageRoute/AboutUsPageRoute.tsx'
import ViewAllPageView from './Pages/InternshipsAndTrainings/ViewAllPage/ViewAllPageRoute/ViewAllPageView.tsx'
import ViewAllSkillOrientedCourses from './Pages/SkillOrientedCourses/ViewAllSkillOrientedCourses/ViewAllSkillOrientedCourses.tsx'
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
        path: '/getintouch',
        element: <GetInTouch />
      },
      {
        path: '/SkillOrientedCourses',
        element: <SkillOrientedCourses/>
      },
      // here i want about us route
      {
        path:'/aboutus',
        element: <AboutUsPageRoute/>
      }, 
      {
        path:'/viewallinternshipsandtrainings',
        element: <ViewAllPageView/>
      },
      {
        path: '/viewallcourses',
        element: <ViewAllSkillOrientedCourses/>
      }
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
