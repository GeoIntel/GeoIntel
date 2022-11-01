import React, { useState, useEffect } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import ToolTip from './ToolTip'
import NewProject from './NewProject'
import DeleteProject from './DeleteProject'
import CustomProgress from './CustomProgress'
import { fetchProjects } from '../services/projects'
import useForceUpdate from '../hooks/useForceUpdate'

const ProjectsNav = () => {
  const [projects, setProjects] = useState()
  const [projectsLoading, setProjectsLoading] = useState(true)
  const forceUpdate = useForceUpdate()

  const onProjectsChangeHandler = () => {
    setProjectsLoading(true)
    fetchProjects({
      setProjects,
      setProjectsLoading
    })
    forceUpdate()
  }

  useEffect(() => {
    fetchProjects({
      setProjects,
      setProjectsLoading
    })
  }, [])

  return (
    <NavDropdown title={
      <ToolTip position="right" tip="Projects">
        <FontAwesomeIcon icon={faFile} inverse />
      </ToolTip>
    } id="basic-nav-dropdown">
      <NavDropdown.Item href="#">
        <NewProject onProjectsChange={onProjectsChangeHandler} />
      </NavDropdown.Item>
      <NavDropdown.Item href="#">
        {projectsLoading
          ? <CustomProgress className='py-4'/>
          : <DeleteProject projects={projects} onProjectsChange={onProjectsChangeHandler} />
        }
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default ProjectsNav
