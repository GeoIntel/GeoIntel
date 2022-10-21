import React, { useState, useEffect, useMemo } from 'react'
import Badge from 'react-bootstrap/Badge'

const Coordinates = () => {
  const [olMousePosition, setOlMousePosition] = useState([])

  useMemo(() => setOlMousePosition(document.getElementsByClassName('ol-mouse-position')), [])

  useEffect(() => {
    if (olMousePosition.length === 2) {
      olMousePosition[1].remove()
    }
  }, [olMousePosition])

  return (
    <Badge bg="dark" id="mouse-position" style={{ zIndex: 1, position: 'absolute', bottom: 5, left: 5, minWidth: '150px' }}></Badge>
  )
}

export default Coordinates
