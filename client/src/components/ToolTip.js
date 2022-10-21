import React from 'react'
import PropTypes from 'prop-types'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const ToolTip = ({ children, position, tip }) => {
  return (
    <OverlayTrigger
      placement={position}
      overlay={<Tooltip>{tip}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  )
}

ToolTip.propTypes = {
  children: PropTypes.any,
  position: PropTypes.any,
  tip: PropTypes.any
}

export default ToolTip
