import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './components/NavBar'
import OpenLayersMap from './components/OpenLayersMap'
import Coordinates from './components/Coordinates'

const App = () => {
  return (
    <>
      <ToastContainer theme="dark" />
      <NavBar />
      <OpenLayersMap features={[]} />
      <Coordinates />
    </>
  )
}

export default App
