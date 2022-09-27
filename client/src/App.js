import React from 'react'
import NavBar from './components/NavBar'
import OpenLayersMap from './components/OpenLayersMap'

const App = () => {
  return (
    <>
      <NavBar />
      <OpenLayersMap features={[]} />
    </>
  )
}

export default App
