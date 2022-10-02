import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import ToolTip from './ToolTip'

const ProjectsNav = () => {
  return (
    <NavDropdown title={
      <ToolTip position="right" tip="Projects">
        <FontAwesomeIcon icon={faFile} inverse />
      </ToolTip>
    } id="basic-nav-dropdown">
      <NavDropdown.Item href="#">
        <ToolTip position="right" tip="New Project">
          <FontAwesomeIcon icon={faFileCirclePlus} />
        </ToolTip>
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default ProjectsNav
