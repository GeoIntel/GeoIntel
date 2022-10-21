import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast'

const Toaster = (props) => {
  const [show, setShow] = useState(true)

  return (
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">GeoIntel</strong>
      </Toast.Header>
      <Toast.Body>Woohoo, you&apos;re reading this text in a Toast!</Toast.Body>
    </Toast>
  )
}

export default Toaster
