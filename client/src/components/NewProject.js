import React, { useState } from 'react'
import propTypes from 'prop-types'
import { toast } from 'react-toastify'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import http from '../utils/http'

const NewProject = (props) => {
  const [show, setShow] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [valid, setValid] = useState(false)
  const [nameErrorMessage, setNameErrorMessage] = useState('')
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('')
  const { onProjectsChange } = props

  const notify = () => toast.success(`Created project - ${projectName}`)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleNameChange = (e) => {
    const inputValue = e.target.value
    const regex = /^[a-zA-Z_][0-9a-zA-Z_]*$/g
    const isValid = regex.test(inputValue)
    if (!isValid) {
      setValid(false)
      setNameErrorMessage('Please use only a-z, A-Z, 0-9, and underscore (_) symbol.')
    }
    if (isValid) {
      setValid(true)
      setNameErrorMessage('')
    }
    setProjectName(inputValue)
  }
  const handleDescriptionChange = (e) => {
    const inputValue = e.target.value
    const regex = /^[-0-9a-zA-Z_ ]*$/g
    const isValid = regex.test(inputValue)
    if (!isValid) {
      setValid(false)
      setDescriptionErrorMessage('Please use only a-z, A-Z, 0-9, space, hyphen (-), and underscore (_) symbol.')
    }
    if (isValid) {
      setValid(true)
      setDescriptionErrorMessage('')
    }
    setProjectDescription(inputValue)
  }

  const newProject = () => {
    handleClose()
    http('project', 'post', {
      databaseName: projectName,
      databaseDescription: projectDescription
    })
      .then(response => {
        notify()
        console.log(response.data)
        onProjectsChange()
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <span onClick={handleShow}><FontAwesomeIcon icon={faFileCirclePlus} /> New Project</span>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><FontAwesomeIcon icon={faFileCirclePlus} /> New Project</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form
            onKeyDown={e => e.stopPropagation()}
            onClick={e => e.stopPropagation()}
            onFocus={e => e.stopPropagation()}
            onMouseOver={e => e.stopPropagation()}
          >
            <FloatingLabel
              controlId="newProject.ProjectName"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="All_The_Intel"
                autoFocus
                value={projectName}
                onChange={handleNameChange}
              />
            </FloatingLabel>
            <div className='validation-field text-danger my-1'>
              <small>{nameErrorMessage}</small>
            </div>
            <FloatingLabel
              controlId="newProject.ProjectDescription"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="The project with all the intel."
                value={projectDescription}
                onChange={handleDescriptionChange}
              />
            </FloatingLabel>
            <div className='validation-field text-danger my-1'>
              <small>{descriptionErrorMessage}</small>
            </div>
          </Form>
          <Button
            variant="primary"
            type="submit"
            disabled={!valid}
            onClick={newProject}
          >
            Submit
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

NewProject.propTypes = {
  onProjectsChange: propTypes.func
}

export default NewProject
