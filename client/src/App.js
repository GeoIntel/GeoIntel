import React from 'react'
import NavBar from './components/NavBar'
import OpenLayersMap from './components/OpenLayersMap'
import Coordinates from './components/Coordinates'

const App = () => {
  return (
    <>
      <NavBar />
      <OpenLayersMap features={[]} />
      <Coordinates />
    </>
  )
}

export default App
