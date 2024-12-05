import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import FutureFestButton from './Components/FutureFestButton'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <FutureFestButton />
    </>
  )
}

export default App
