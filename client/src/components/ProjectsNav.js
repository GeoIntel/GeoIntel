import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import ToolTip from './ToolTip'
import NewProject from './NewProject'

const ProjectsNav = () => {
  return (
    <NavDropdown title={
      <ToolTip position="right" tip="Projects">
        <FontAwesomeIcon icon={faFile} inverse />
      </ToolTip>
    } id="basic-nav-dropdown">
      <NavDropdown.Item href="#">
          <NewProject />
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default ProjectsNav
