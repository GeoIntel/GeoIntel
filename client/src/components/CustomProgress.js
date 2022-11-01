import React from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'

const CustomProgress = (props) => {
  return (
    <div className={`d-flex justify-content-center ${props.className || ''}`}>
      <Spinner animation="border" variant="dark" />
    </div>
  )
}

CustomProgress.propTypes = {
  className: PropTypes.string
}

export default CustomProgress
